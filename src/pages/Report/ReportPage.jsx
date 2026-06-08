import { Link, useNavigate, useParams } from "react-router-dom";
import { StatusBadge } from "../../components/StatusBadge/StatusBadge";
import { reportsDemoData } from "../Reports/data/reportsDemoData";
import { BackButton } from "../../components/BackButton/BackButton";

import "./ReportPage.css";

const reportTypeLabels = {
    place: "Объявление",
    user: "Пользователь",
    review: "Отзыв",
};

export function ReportPage() {
    const { reportId } = useParams();
    const navigate = useNavigate();

    const report =
        reportsDemoData.find((item) => item.id === Number(reportId)) ||
        reportsDemoData[0];

    function handleTakeInWork() {
        alert("Демо: жалоба взята в работу");
    }

    function handleResolve() {
        alert("Демо: жалоба закрыта");
        navigate("/reports");
    }

    function handleReject() {
        alert("Демо: жалоба отклонена");
        navigate("/reports");
    }

    return (
        <section className="page">

            <BackButton />
            
            <div className="page-header">
                <div>
                    <p className="eyebrow">Жалоба #{report.id}</p>

                    <h2>{report.title}</h2>

                    <p>
                        Тип жалобы: {reportTypeLabels[report.type] || report.type}
                    </p>
                </div>

                <StatusBadge status={report.status} />
            </div>

            <div className="report-page-grid">
                <div className="report-page-main">
                    <article className="report-section">
                        <h3>Описание жалобы</h3>

                        <p>
                            Пользователь сообщил о проблеме. Здесь будет полный текст жалобы,
                            комментарии, вложения и дополнительные данные после подключения API.
                        </p>
                    </article>

                    <article className="report-section">
                        <h3>Связанные данные</h3>

                        <div className="report-links">
                            {report.placeId ? (
                                <Link to={`/places/view/${report.placeId}`}>
                                    Открыть объявление: {report.placeTitle}
                                </Link>
                            ) : null}

                            {report.userId ? (
                                <Link to={`/users/view/${report.userId}`}>
                                    Открыть пользователя: {report.userName}
                                </Link>
                            ) : null}
                        </div>
                    </article>
                </div>

                <aside className="report-page-aside">
                    <article className="report-section">
                        <h3>Информация</h3>

                        <div className="report-info-list">
                            <div>
                                <span>ID</span>
                                <strong>#{report.id}</strong>
                            </div>

                            <div>
                                <span>Тип</span>
                                <strong>{reportTypeLabels[report.type] || report.type}</strong>
                            </div>

                            <div>
                                <span>Дата</span>
                                <strong>{report.createdAt}</strong>
                            </div>

                            <div>
                                <span>Пользователь</span>
                                <strong>{report.userName}</strong>
                            </div>
                        </div>
                    </article>

                    <article className="report-section">
                        <h3>Решение модератора</h3>

                        <div className="report-actions">
                            <button type="button" onClick={handleTakeInWork}>
                                Взять в работу
                            </button>

                            <button type="button" onClick={handleResolve}>
                                Закрыть жалобу
                            </button>

                            <button type="button" onClick={handleReject}>
                                Отклонить жалобу
                            </button>
                        </div>
                    </article>
                </aside>
            </div>
        </section>
    );
}