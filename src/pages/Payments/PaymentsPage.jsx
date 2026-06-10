import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { PaymentsStatusTabs } from "./components/PaymentsStatusTabs";
import { PaymentsTable } from "./components/PaymentsTable";

import {
  paymentsDemoData,
  paymentStatusItems,
} from "./data/paymentsDemoData";

import { filterPayments } from "./utils/paymentsFilters";

import "./PaymentsPage.css";

export function PaymentsPage() {
  const { status } = useParams();

  const currentStatus = status || "all";

  const filteredPayments = useMemo(() => {
    return filterPayments(paymentsDemoData, currentStatus);
  }, [currentStatus]);

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Платежи</p>

          <h2>Платежи и заявки на оплату</h2>

          <p>
            Здесь администратор видит оплату тарифов, подтверждение ручных
            платежей и историю оплат.
          </p>
        </div>

        <span className="status-badge">Демо-данные</span>
      </div>

      <PaymentsStatusTabs items={paymentStatusItems} />

      <PaymentsTable payments={filteredPayments} />
    </section>
  );
}