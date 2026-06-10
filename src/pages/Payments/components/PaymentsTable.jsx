import { Link } from "react-router-dom";

import { EmptyState } from "../../../components/EmptyState/EmptyState";
import { StatusBadge } from "../../../components/StatusBadge/StatusBadge";

export function PaymentsTable({ payments }) {
    if (!payments.length) {
        return (
            <EmptyState className="payments-empty">
                Платежей в этом разделе пока нет.
            </EmptyState>
        );
    }

    return (
        <div className="payments-table-wrap">
            <table className="payments-table">
                <thead>
                    <tr>
                        <th>Платёж</th>
                        <th>Пользователь</th>
                        <th>Объявление</th>
                        <th>Тариф</th>
                        <th>Сумма</th>
                        <th>Статус</th>
                        <th>Дата</th>
                        <th>Действия</th>
                    </tr>
                </thead>

                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.id}>
                            <td>
                                <div className="payment-title-cell">
                                    <span>#{payment.id}</span>
                                    <strong>Платёж</strong>
                                </div>
                            </td>

                            <td>
                                <Link
                                    className="table-inline-link"
                                    to={`/users/view/${payment.userId}`}
                                >
                                    {payment.userName}
                                </Link>
                            </td>

                            <td>
                                <Link
                                    className="table-inline-link"
                                    to={`/places/view/${payment.placeId}`}
                                >
                                    {payment.placeTitle}
                                </Link>
                            </td>

                            <td>{payment.planTitle}</td>

                            <td>{payment.amount} ₽</td>

                            <td>
                                <StatusBadge status={payment.status} />
                            </td>

                            <td>{payment.createdAt}</td>

                            <td>
                                <Link className="table-action" to={`/payments/view/${payment.id}`}>
                                    Открыть
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}