import { RecentEventsTable } from "./components/RecentEventsTable";
import { StatisticsSummary } from "./components/StatisticsSummary";
import { StatisticsTable } from "./components/StatisticsTable";
import {
    categoryStats,
    paymentStats,
    recentEvents,
    summaryStats,
    tariffStats,
} from "./data/statisticsDemoData";

import "./StatisticsPage.css";

export function StatisticsPage() {
    return (
        <section className="page statistics-page">
            <div className="page-header">
                <div>
                    <p className="eyebrow">Статистика</p>
                    <h2>Сводка по проекту</h2>
                    <p>
                        Основные показатели Native Places: пользователи, объявления,
                        платежи, тарифы и последние события в системе.
                    </p>
                </div>

                <span className="status-badge">Демо-данные</span>
            </div>

            <StatisticsSummary items={summaryStats} />

            <div className="statistics-grid">
                <StatisticsTable
                    title="Объявления по категориям"
                    description="Распределение объектов по основным разделам сайта."
                    columns={[
                        { key: "title", label: "Категория" },
                        { key: "count", label: "Количество" },
                    ]}
                    rows={categoryStats}
                />

                <StatisticsTable
                    title="Пользователи по тарифам"
                    description="Сколько пользователей находится на каждом тарифном плане."
                    columns={[
                        { key: "title", label: "Тариф" },
                        { key: "count", label: "Пользователей" },
                    ]}
                    rows={tariffStats}
                />

                <StatisticsTable
                    title="Платежи"
                    description="Суммы платежей по ключевым периодам."
                    columns={[
                        { key: "period", label: "Период" },
                        { key: "amount", label: "Сумма" },
                    ]}
                    rows={paymentStats}
                />

                <RecentEventsTable events={recentEvents} />
            </div>
        </section>
    );
}