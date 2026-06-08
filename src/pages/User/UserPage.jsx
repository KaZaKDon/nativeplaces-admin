import { useParams } from "react-router-dom";

import { StatusBadge } from "../../components/StatusBadge/StatusBadge";
import { userDemoData } from "./data/userDemoData";
import { UserInfoCard } from "./components/UserInfoCard";
import { UserManagementCard } from "./components/UserManagementCard";
import { CURRENT_USER } from "../../config/auth";
import { UserPlaces } from "./components/UserPlaces";
import { UserHistory } from "./components/UserHistory";
import { BackButton } from "../../components/BackButton/BackButton";

import "./UserPage.css";

export function UserPage() {
    const { userId } = useParams();

    const mainInfo = [
        {
            label: "ID",
            value: `#${userDemoData.id}`,
        },
        {
            label: "Email",
            value: userDemoData.email,
        },
        {
            label: "Телефон",
            value: userDemoData.phone,
        },
        {
            label: "Роль",
            value: userDemoData.role,
        },
        {
            label: "Дата регистрации",
            value: userDemoData.createdAt,
        },
        {
            label: "Последний вход",
            value: userDemoData.lastLoginAt,
        },
    ];

    return (
        <section className="page">

            <BackButton />
            
            <div className="page-header">
                <div>
                    <p className="eyebrow">
                        Пользователь #{userId}
                    </p>

                    <h2>{userDemoData.name}</h2>

                    <p>
                        Карточка пользователя Native Places.
                    </p>
                </div>

                <StatusBadge status={userDemoData.status} />
            </div>

            <div className="user-page-grid">
                <div className="user-page-main">
                    <UserInfoCard
                        title="Основная информация"
                        items={mainInfo}
                    />
                    <UserPlaces places={userDemoData.places} />
                    <UserHistory history={userDemoData.history} />
                </div>

                <aside className="user-page-aside">
                    <article className="user-section">
                        <h3>Статистика</h3>

                        <div className="user-info-list">
                            <div>
                                <span>Объявлений</span>
                                <strong>{userDemoData.placesCount}</strong>
                            </div>

                            <div>
                                <span>Платежей</span>
                                <strong>{userDemoData.paymentsCount}</strong>
                            </div>

                            <div>
                                <span>Жалоб</span>
                                <strong>{userDemoData.reportsCount}</strong>
                            </div>
                        </div>
                    </article>

                    {CURRENT_USER.role === "admin" && (
                        <UserManagementCard />
                    )}

                </aside>
            </div>
        </section>
    );
}