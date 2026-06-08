import { NavLink } from "react-router-dom";

export function ReportsStatusTabs({ items }) {
    return (
        <div className="reports-status-tabs">
            {items.map((item) => {
                const to = item.value === "all" ? "/reports" : `/reports/${item.value}`;

                return (
                    <NavLink
                        key={item.value}
                        to={to}
                        end={item.value === "all"}
                        className={({ isActive }) =>
                            isActive
                                ? "reports-status-tab reports-status-tab--active"
                                : "reports-status-tab"
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