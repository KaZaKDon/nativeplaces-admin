import { useParams } from "react-router-dom";

import { StatusBadge } from "../../components/StatusBadge/StatusBadge";
import { userDemoData } from "./data/userDemoData";
import { UserInfoCard } from "./components/UserInfoCard";
import { UserManagementCard } from "./components/UserManagementCard";
import { CURRENT_USER } from "../../config/auth";
import { UserPlaces } from "./components/UserPlaces";
import { UserHistory } from "./components/UserHistory";
import { BackButton } from "../../components/BackButton/BackButton";
import { NotFoundState } from "../../components/NotFoundState/NotFoundState";

import "./UserPage.css";

function findDemoUserById(userId) {
    if (String(userDemoData.id) === String(userId)) {
        return userDemoData;
    }

    return null;
}

function createMainInfo(user) {
    return [
        {
            label: "ID",
            value: `#${user.id}`,
        },
        {
            label: "Email",
            value: user.email,
        },
        {
            label: "Телефон",
            value: user.phone,
        },
        {
            label: "Роль",
            value: user.role,
        },
        {
            label: "Дата регистрации",
            value: user.createdAt,
        },
        {
            label: "Последний вход",
            value: user.lastLoginAt,
        },
    ];
}

export function UserPage() {
    const { userId } = useParams();
    const user = findDemoUserById(userId);

    if (!user) {
        return (
            <NotFoundState
                eyebrow={`Платёж #${userId}`}
                title="Платёж не найден"
                description="В демо-данных нет пользователя с таким ID. Позже здесь будет обработка ответа API."
            />
        );
    }

    const mainInfo = createMainInfo(user);

    return (
        <section className="page">
            <BackButton />

            <div className="page-header">
                <div>
                    <p className="eyebrow">Пользователь #{user.id}</p>

                    <h2>{user.name}</h2>

                    <p>Карточка пользователя Native Places.</p>
                </div>

                <StatusBadge status={user.status} />
            </div>

            <div className="user-page-grid">
                <div className="user-page-main">
                    <UserInfoCard title="Основная информация" items={mainInfo} />

                    <UserPlaces places={user.places} />

                    <UserHistory history={user.history} />
                </div>

                <aside className="user-page-aside">
                    <article className="user-section">
                        <h3>Статистика</h3>

                        <div className="user-info-list">
                            <div>
                                <span>Объявлений</span>
                                <strong>{user.placesCount}</strong>
                            </div>

                            <div>
                                <span>Платежей</span>
                                <strong>{user.paymentsCount}</strong>
                            </div>

                            <div>
                                <span>Жалоб</span>
                                <strong>{user.reportsCount}</strong>
                            </div>
                        </div>
                    </article>

                    {CURRENT_USER.role === "admin" && <UserManagementCard />}
                </aside>
            </div>
        </section>
    );
}