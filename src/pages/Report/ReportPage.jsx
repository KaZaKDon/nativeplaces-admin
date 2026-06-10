import { Link, useNavigate, useParams } from "react-router-dom";
import { StatusBadge } from "../../components/StatusBadge/StatusBadge";
import { reportsDemoData } from "../Reports/data/reportsDemoData";
import { BackButton } from "../../components/BackButton/BackButton";
import { NotFoundState } from "../../components/NotFoundState/NotFoundState";

import "./ReportPage.css";

const reportTypeLabels = {
    place: "Объявление",
    user: "Пользователь",
    review: "Отзыв",
};

function findDemoReportById(reportId) {
    return reportsDemoData.find((item) => String(item.id) === String(reportId));
}

function getReportTypeLabel(type) {
    return reportTypeLabels[type] || type;
}

export function ReportPage() {
    const { reportId } = useParams();
    const navigate = useNavigate();

    const report = findDemoReportById(reportId);

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

    if (!report) {
        return (
            <NotFoundState
                eyebrow={`Платёж #${reportId}`}
                title="Платёж не найден"
                description="В демо-данных нет платежа с таким ID. Позже здесь будет обработка ответа API."
            />
        );
    }

    const reportTypeLabel = getReportTypeLabel(report.type);

    return (
        <section className="page">
            <BackButton />

            <div className="page-header">
                <div>
                    <p className="eyebrow">Жалоба #{report.id}</p>

                    <h2>{report.title}</h2>

                    <p>Тип жалобы: {reportTypeLabel}</p>
                </div>

                <StatusBadge status={report.status} />
            </div>

            <div className="report-page-grid">
                <div className="report-page-main">
                    <article className="report-section">
                        <h3>Описание жалобы</h3>

                        <p>
                            Пользователь сообщил о проблеме. Здесь будет полный текст жалобы,
                            комментарии, вложения и дополнительные данные после подключения
                            API.
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
                                <strong>{reportTypeLabel}</strong>
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