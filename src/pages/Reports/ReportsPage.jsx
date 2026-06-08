import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { ReportsStatusTabs } from "./components/ReportsStatusTabs";
import { ReportsTable } from "./components/ReportsTable";
import {
  reportsDemoData,
  reportStatusItems,
} from "./data/reportsDemoData";

import "./ReportsPage.css";

export function ReportsPage() {
  const { status } = useParams();

  const currentStatus = status || "all";

  const filteredReports = useMemo(() => {
    if (currentStatus === "all") {
      return reportsDemoData;
    }

    return reportsDemoData.filter((report) => report.status === currentStatus);
  }, [currentStatus]);

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Жалобы</p>

          <h2>Обработка жалоб</h2>

          <p>
            Здесь модераторы рассматривают жалобы на объявления, пользователей
            и отзывы.
          </p>
        </div>

        <span className="status-badge">Демо-данные</span>
      </div>

      <ReportsStatusTabs items={reportStatusItems} />

      <ReportsTable reports={filteredReports} />
    </section>
  );
}