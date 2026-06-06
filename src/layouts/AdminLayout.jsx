import { useMemo } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { pageTitles } from "../config/navigation";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Topbar } from "../components/Topbar/Topbar";
import { useTheme } from "../hooks/useTheme";

export function AdminLayout() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const pageTitle = useMemo(() => {
    if (location.pathname.startsWith("/places")) {
      return "Объявления";
    }

    return pageTitles[location.pathname] || "Админка";
  }, [location.pathname]);

  return (
    <div className="admin-shell">
      <Sidebar />

      <main className="workspace">
        <Topbar pageTitle={pageTitle} theme={theme} onToggleTheme={toggleTheme} />

        <section className="content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}