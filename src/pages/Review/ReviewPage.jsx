import { Link, useNavigate, useParams } from "react-router-dom";

import { StatusBadge } from "../../components/StatusBadge/StatusBadge";
import { BackButton } from "../../components/BackButton/BackButton";

import { reviewsDemoData } from "../Reviews/data/reviewsDemoData";

import "./ReviewPage.css";

export function ReviewPage() {
    const { reviewId } = useParams();
    const navigate = useNavigate();

    const review =
        reviewsDemoData.find(
            (item) => item.id === Number(reviewId)
        ) || reviewsDemoData[0];

    function handleHide() {
        alert("Демо: отзыв скрыт");
        navigate("/reviews");
    }

    return (
        <section className="page">
            <BackButton />

            <div className="page-header">
                <div>
                    <p className="eyebrow">
                        Отзыв #{review.id}
                    </p>

                    <h2>
                        Отзыв пользователя
                    </h2>
                </div>

                <StatusBadge status={review.status} />
            </div>

            <div className="review-page-grid">
                <div className="review-page-main">
                    <article className="review-section">
                        <h3>Текст отзыва</h3>

                        <p>{review.text}</p>
                    </article>

                    <article className="review-section">
                        <h3>Связанные данные</h3>

                        <div className="review-links">
                            <Link
                                to={`/places/view/${review.placeId}`}
                            >
                                Объявление: {review.placeTitle}
                            </Link>

                            <Link
                                to={`/users/view/${review.userId}`}
                            >
                                Пользователь: {review.userName}
                            </Link>
                        </div>
                    </article>
                </div>

                <aside className="review-page-aside">
                    <article className="review-section">
                        <h3>Информация</h3>

                        <div className="review-info-list">
                            <div>
                                <span>ID</span>
                                <strong>#{review.id}</strong>
                            </div>

                            <div>
                                <span>Оценка</span>
                                <strong>{review.rating}/5</strong>
                            </div>

                            <div>
                                <span>Дата</span>
                                <strong>{review.createdAt}</strong>
                            </div>
                        </div>
                    </article>

                    <article className="review-section">
                        <h3>Модерация</h3>

                        <div className="review-actions">
                            <button
                                type="button"
                                onClick={handleHide}
                            >
                                Скрыть отзыв
                            </button>
                        </div>
                    </article>
                </aside>
            </div>
        </section>
    );
}