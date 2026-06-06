const stats = [
  { title: "На модерации", value: "0", text: "Ждут проверки" },
  { title: "Опубликовано", value: "0", text: "Активные объявления" },
  { title: "Жалобы", value: "0", text: "Новые обращения" },
  { title: "Платежи", value: "0", text: "Ожидают обработки" },
];

export function DashboardPage() {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Главная</p>
          <h2>Панель управления</h2>
          <p>Каркас админки Native Places. Сейчас данные демонстрационные.</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((item) => (
          <article className="stat-card" key={item.title}>
            <span>{item.title}</span>
            <strong>{item.value}</strong>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
