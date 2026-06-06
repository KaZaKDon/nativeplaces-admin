import { Link } from "react-router-dom";

const placeStatusCards = [
  {
    title: "На модерации",
    count: 12,
    status: "pending",
    description: "Новые объявления, которые ждут проверки администратора или модератора.",
  },
  {
    title: "Опубликованные",
    count: 38,
    status: "published",
    description: "Объявления, которые уже видны пользователям на основном сайте.",
  },
  {
    title: "Отклонённые",
    count: 4,
    status: "rejected",
    description: "Объявления, которые не прошли модерацию и требуют исправлений.",
  },
  {
    title: "Архив",
    count: 7,
    status: "archived",
    description: "Снятые, просроченные или завершённые объявления.",
  },
];

export function PlacesPage() {
  return (
    <section className="page">
      <header className="page-header">
        <div>
          <p className="eyebrow">Управление объявлениями</p>
          <h2>Объявления</h2>
          <p>
            Здесь будет общий раздел объявлений. Сначала выбираем нужный статус, затем
            открываем список и карточку модерации.
          </p>
        </div>
        <span className="status-badge">Демо-счётчики</span>
      </header>

      <div className="status-grid">
        {placeStatusCards.map((card) => (
          <Link key={card.status} to={`/places/${card.status}`} className="status-card">
            <span className={`status-card__dot status-card__dot--${card.status}`} />
            <div>
              <span className="status-card__label">{card.title}</span>
              <strong>{card.count}</strong>
              <p>{card.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="empty-state">
        <h3>Следующий шаг</h3>
        <p>
          После подключения API эти счётчики будут приходить из базы, а карточки будут
          открывать реальные списки объявлений по статусам.
        </p>
      </div>
    </section>
  );
}
