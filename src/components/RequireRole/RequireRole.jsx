import { Navigate } from "react-router-dom";
import { CURRENT_USER } from "../../config/auth";
import { canAccessByRole } from "../../utils/access";

export function RequireRole({ roles, children }) {
    const userRole = CURRENT_USER.role;

    if (!canAccessByRole(roles, userRole)) {
        return <Navigate to="/" replace />;
    }

    return children;
}