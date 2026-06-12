import { useMemo, useState } from "react";

import { ModeratorLogsFilters } from "./components/ModeratorLogsFilters";
import { ModeratorLogsSummary } from "./components/ModeratorLogsSummary";
import { ModeratorLogsTable } from "./components/ModeratorLogsTable";
import {
    actionFilterItems,
    moderatorFilterItems,
    moderatorLogsDemoData,
    periodFilterItems,
    sectionFilterItems,
} from "./data/moderatorLogsDemoData";

import "./ModeratorLogsPage.css";

function isLogInPeriod(log, period) {
    if (period === "all") {
        return true;
    }

    if (period === "today") {
        return log.period === "today";
    }

    if (period === "week") {
        return log.period === "today" || log.period === "week";
    }

    if (period === "month") {
        return log.period === "today" || log.period === "week" || log.period === "month";
    }

    return true;
}

export function ModeratorLogsPage() {
    const [filters, setFilters] = useState({
        moderator: "all",
        section: "all",
        action: "all",
        period: "all",
    });

    const filteredLogs = useMemo(() => (
        moderatorLogsDemoData.filter((log) => {
            const moderatorMatch = (
                filters.moderator === "all" || log.moderatorId === filters.moderator
            );

            const sectionMatch = (
                filters.section === "all" || log.sectionCode === filters.section
            );

            const actionMatch = (
                filters.action === "all" || log.actionCode === filters.action
            );

            const periodMatch = isLogInPeriod(log, filters.period);

            return moderatorMatch && sectionMatch && actionMatch && periodMatch;
        })
    ), [filters]);

    const summary = useMemo(() => ({
        total: filteredLogs.length,
        today: filteredLogs.filter((log) => log.period === "today").length,
        places: filteredLogs.filter((log) => log.sectionCode === "places").length,
        reportsAndReviews: filteredLogs.filter((log) => (
            log.sectionCode === "reports" || log.sectionCode === "reviews"
        )).length,
    }), [filteredLogs]);

    function handleFilterChange(field, value) {
        setFilters((currentFilters) => ({
            ...currentFilters,
            [field]: value,
        }));
    }

    function resetFilters() {
        setFilters({
            moderator: "all",
            section: "all",
            action: "all",
            period: "all",
        });
    }

    return (
        <section className="page moderator-logs-page">
            <div className="page-header">
                <div>
                    <p className="eyebrow">Логи модераторов</p>
                    <h2>Журнал действий модерации</h2>
                    <p>
                        История действий администраторов и модераторов: публикации,
                        отклонения, жалобы, отзывы, платежи и пользователи.
                    </p>
                </div>

                <span className="status-badge">Демо-данные</span>
            </div>

            <ModeratorLogsFilters
                filters={filters}
                moderators={moderatorFilterItems}
                sections={sectionFilterItems}
                actions={actionFilterItems}
                periods={periodFilterItems}
                onChange={handleFilterChange}
                onReset={resetFilters}
            />

            <ModeratorLogsSummary summary={summary} />

            <ModeratorLogsTable logs={filteredLogs} />
        </section>
    );
}