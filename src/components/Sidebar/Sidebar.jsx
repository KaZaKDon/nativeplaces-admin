import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { navigationItems } from "../../config/navigation";
import { CURRENT_USER } from "../../config/auth";

export function Sidebar() {
    const availableNavigation = useMemo(() => {
        return navigationItems.filter((item) =>
            item.roles.includes(CURRENT_USER.role)
        );
    }, []);

    return (
        <aside className="sidebar">
            <div className="brand">
                <span className="brand__mark">NP</span>
                <span>
                    <strong>Native Places</strong>
                    <span>Панель управления</span>
                </span>
            </div>

            <nav className="nav" aria-label="Основная навигация">
                {availableNavigation.map((item) => (
                    <NavLink
                        key={item.id}
                        to={item.path}
                        end={item.end}
                        className={({ isActive }) =>
                            isActive ? "nav-link nav-link--active" : "nav-link"
                        }
                    >
                        <span className="nav-link__main">
                            <span className="nav-link__icon" aria-hidden="true">
                                {item.icon}
                            </span>

                            <span className="nav-link__label">
                                {item.label}
                            </span>
                        </span>

                        {item.badge !== null && item.badge !== undefined ? (
                            <span className="nav-link__badge">
                                {item.badge}
                            </span>
                        ) : null}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}