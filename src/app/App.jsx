import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../layouts/AdminLayout.jsx";
import { DashboardPage } from "../pages/Dashboard/DashboardPage.jsx";
import { PlacesPage } from "../pages/Places/PlacesPage.jsx";
import { UsersPage } from "../pages/Users/UsersPage.jsx";
import { ReportsPage } from "../pages/Reports/ReportsPage.jsx";
import { ReviewsPage } from "../pages/Reviews/ReviewsPage.jsx";
import { CategoriesPage } from "../pages/Categories/CategoriesPage.jsx";
import { PlaceTypesPage } from "../pages/PlaceTypes/PlaceTypesPage.jsx";
import { AttributesPage } from "../pages/Attributes/AttributesPage.jsx";
import { DictionariesPage } from "../pages/Dictionaries/DictionariesPage.jsx";
import { PlansPage } from "../pages/Plans/PlansPage.jsx";
import { PaymentsPage } from "../pages/Payments/PaymentsPage.jsx";
import { MailingsPage } from "../pages/Mailings/MailingsPage.jsx";
import { StatisticsPage } from "../pages/Statistics/StatisticsPage.jsx";
import { ModeratorLogsPage } from "../pages/ModeratorLogs/ModeratorLogsPage.jsx";
import { SettingsPage } from "../pages/Settings/SettingsPage.jsx";

export function App() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="places" element={<PlacesPage />} />
        <Route path="places/:status" element={<PlacesPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="place-types" element={<PlaceTypesPage />} />
        <Route path="attributes" element={<AttributesPage />} />
        <Route path="dictionaries" element={<DictionariesPage />} />
        <Route path="plans" element={<PlansPage />} />
        <Route path="payments" element={<PaymentsPage />} />
        <Route path="mailings" element={<MailingsPage />} />
        <Route path="statistics" element={<StatisticsPage />} />
        <Route path="moderator-logs" element={<ModeratorLogsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
