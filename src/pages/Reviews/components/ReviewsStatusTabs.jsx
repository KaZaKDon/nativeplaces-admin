import { NavLink } from "react-router-dom";

export function ReviewsStatusTabs({ items }) {
    return (
        <div className="reviews-status-tabs">
            {items.map((item) => {
                const to = item.value === "all" ? "/reviews" : `/reviews/${item.value}`;

                return (
                    <NavLink
                        key={item.value}
                        to={to}
                        end={item.value === "all"}
                        className={({ isActive }) =>
                            isActive
                                ? "reviews-status-tab reviews-status-tab--active"
                                : "reviews-status-tab"
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