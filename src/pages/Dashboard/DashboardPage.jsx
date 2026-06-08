import { DashboardStats } from "../../components/DashboardStats/DashboardStats";
import { DashboardPanel } from "../../components/DashboardPanel/DashboardPanel";
import { DashboardList } from "../../components/DashboardList/DashboardList";

import "./DashboardPage.css";

const stats = [
  {
    title: "На модерации",
    value: "12",
    text: "Объявлений ожидают проверки",
    to: "/places/pending",
  },
  {
    title: "Пользователи",
    value: "184",
    text: "Зарегистрировано пользователей",
    to: "/users",
  },
  {
    title: "Жалобы",
    value: "4",
    text: "Требуют внимания модератора",
    to: "/reports",
  },
  {
    title: "Платежи",
    value: "2",
    text: "Ожидают подтверждения",
    to: "/payments",
  },
];

const moderationQueue = [
  {
    id: 1,
    title: "База отдыха Донская",
    category: "Базы отдыха",
    status: "На модерации",
  },
  {
    id: 2,
    title: "Озеро Лебяжье",
    category: "Рыбалка",
    status: "На модерации",
  },
  {
    id: 3,
    title: "Дом в Вёшенской",
    category: "Недвижимость",
    status: "На модерации",
  },
];

const recentActions = [
  {
    id: 1,
    text: "Модератор опубликовал объявление «Рыболовная база Дон»",
  },
  {
    id: 2,
    text: "Создан новый пользователь",
  },
  {
    id: 3,
    text: "Получена новая жалоба",
  },
];

export function DashboardPage() {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Главная</p>

          <h2>Панель управления</h2>

          <p>
            Добро пожаловать в административную панель Native Places.
            Сейчас отображаются демонстрационные данные.
          </p>
        </div>
      </div>

      <DashboardStats items={stats} />

      <div className="dashboard-columns">
        <DashboardPanel title="На модерации" count={moderationQueue.length}>
          <DashboardList
            items={moderationQueue}
            renderItem={(item) => (
              <>
                <strong>{item.title}</strong>

                <span>
                  {item.category} · {item.status}
                </span>
              </>
            )}
          />
        </DashboardPanel>

        <DashboardPanel title="Последние действия" count={recentActions.length}>
          <DashboardList
            items={recentActions}
            renderItem={(item) => item.text}
          />
        </DashboardPanel>
      </div>
    </section>
  );
}