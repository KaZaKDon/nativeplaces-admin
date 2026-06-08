import { NavLink } from "react-router-dom";

export function PlacesStatusTabs({ items }) {
    return (
        <div className="places-status-tabs">
            {items.map((item) => {
                const to = item.value === "all" ? "/places" : `/places/${item.value}`;

                return (
                    <NavLink
                        key={item.value}
                        to={to}
                        end={item.value === "all"}
                        className={({ isActive }) =>
                            isActive
                                ? "places-status-tab places-status-tab--active"
                                : "places-status-tab"
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