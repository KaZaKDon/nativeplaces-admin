import { NavLink } from "react-router-dom";
import { navigationItems } from "../../config/navigation";
import { CURRENT_USER } from "../../config/auth";
import { canAccessByRole } from "../../utils/access";

export function Sidebar() {
    const userRole = CURRENT_USER.role;

    const availableNavigation = navigationItems.filter((item) =>
        canAccessByRole(item.roles, userRole)
    );

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
                            <span
                                className="nav-link__icon"
                                aria-hidden="true"
                            >
                                {item.icon}
                            </span>

                            <span className="nav-link__label">
                                {item.label}
                            </span>
                        </span>

                        {item.badge != null && (
                            <span className="nav-link__badge">
                                {item.badge}
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}