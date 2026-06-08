import { NavLink } from "react-router-dom";

export function PaymentsStatusTabs({ items }) {
    return (
        <div className="payments-status-tabs">
            {items.map((item) => {
                const to =
                    item.value === "all" ? "/payments" : `/payments/${item.value}`;

                return (
                    <NavLink
                        key={item.value}
                        to={to}
                        end={item.value === "all"}
                        className={({ isActive }) =>
                            isActive
                                ? "payments-status-tab payments-status-tab--active"
                                : "payments-status-tab"
                        }
                    >
                        <span>{item.label}</span>
                        <strong>{item.count}</strong>
                    </NavLink>
                );
            })}
        </div>
    );
}