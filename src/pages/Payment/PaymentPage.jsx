import { Link, useNavigate, useParams } from "react-router-dom";

import { BackButton } from "../../components/BackButton/BackButton";
import { StatusBadge } from "../../components/StatusBadge/StatusBadge";
import { paymentsDemoData } from "../Payments/data/paymentsDemoData";

import "./PaymentPage.css";

export function PaymentPage() {
    const { paymentId } = useParams();
    const navigate = useNavigate();

    const payment =
        paymentsDemoData.find((item) => item.id === Number(paymentId)) ||
        paymentsDemoData[0];

    function handleConfirm() {
        alert("Демо: платёж подтверждён");
        navigate("/payments");
    }

    function handleReject() {
        alert("Демо: платёж отклонён");
        navigate("/payments");
    }

    return (
        <section className="page">
            <BackButton />

            <div className="page-header">
                <div>
                    <p className="eyebrow">Платёж #{payment.id}</p>

                    <h2>{payment.amount} ₽</h2>

                    <p>
                        Тариф «{payment.planTitle}» для объявления «{payment.placeTitle}».
                    </p>
                </div>

                <StatusBadge status={payment.status} />
            </div>

            <div className="payment-page-grid">
                <div className="payment-page-main">
                    <article className="payment-section">
                        <h3>Связанные данные</h3>

                        <div className="payment-links">
                            <Link to={`/users/view/${payment.userId}`}>
                                Пользователь: {payment.userName}
                            </Link>

                            <Link to={`/places/view/${payment.placeId}`}>
                                Объявление: {payment.placeTitle}
                            </Link>
                        </div>
                    </article>

                    <article className="payment-section">
                        <h3>Комментарий</h3>

                        <p>
                            Здесь будет информация о ручной оплате, квитанции, назначении
                            платежа или ответ платёжной системы после подключения онлайн-оплаты.
                        </p>
                    </article>
                </div>

                <aside className="payment-page-aside">
                    <article className="payment-section">
                        <h3>Информация</h3>

                        <div className="payment-info-list">
                            <div>
                                <span>ID</span>
                                <strong>#{payment.id}</strong>
                            </div>

                            <div>
                                <span>Тариф</span>
                                <strong>{payment.planTitle}</strong>
                            </div>

                            <div>
                                <span>Сумма</span>
                                <strong>{payment.amount} ₽</strong>
                            </div>

                            <div>
                                <span>Дата</span>
                                <strong>{payment.createdAt}</strong>
                            </div>
                        </div>
                    </article>

                    <article className="payment-section">
                        <h3>Управление платежом</h3>

                        <div className="payment-actions">
                            <button type="button" onClick={handleConfirm}>
                                Подтвердить оплату
                            </button>

                            <button type="button" onClick={handleReject}>
                                Отклонить оплату
                            </button>
                        </div>
                    </article>
                </aside>
            </div>
        </section>
    );
}