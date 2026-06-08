import { NavLink } from "react-router-dom";

export function UsersStatusTabs({ items }) {
    return (
        <div className="users-status-tabs">
            {items.map((item) => {
                const to = item.value === "all" ? "/users" : `/users/${item.value}`;

                return (
                    <NavLink
                        key={item.value}
                        to={to}
                        end={item.value === "all"}
                        className={({ isActive }) =>
                            isActive
                                ? "users-status-tab users-status-tab--active"
                                : "users-status-tab"
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