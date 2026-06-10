import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { UsersStatusTabs } from "./components/UsersStatusTabs";
import { UsersTable } from "./components/UsersTable";

import {
  usersDemoData,
  userStatusItems,
} from "./data/usersDemoData";

import { filterUsers } from "./utils/usersFilters";

import "./UsersPage.css";

export function UsersPage() {
  const { status } = useParams();

  const currentStatus = status || "all";

  const filteredUsers = useMemo(() => {
    return filterUsers(usersDemoData, currentStatus);
  }, [currentStatus]);

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Пользователи</p>

          <h2>Управление пользователями</h2>

          <p>
            Здесь будет список пользователей, роли, блокировки,
            история действий, объявления и платежи пользователя.
          </p>
        </div>

        <span className="status-badge">Демо-данные</span>
      </div>

      <UsersStatusTabs items={userStatusItems} />

      <UsersTable users={filteredUsers} />
    </section>
  );
}