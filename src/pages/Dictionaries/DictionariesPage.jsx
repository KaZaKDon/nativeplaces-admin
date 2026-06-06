import { dictionaries } from "../../data/dictionaries.js";

export function DictionariesPage() {
  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Справочники</p>
          <h2>Справочники проекта</h2>
          <p>Раздел заложен заранее. Сейчас значения демонстрационные.</p>
        </div>
        <span className="status-badge">В разработке</span>
      </div>

      <div className="dictionary-grid">
        {dictionaries.map((dictionary) => (
          <article className="dictionary-card" key={dictionary.title}>
            <div className="dictionary-card__header">
              <div>
                <h3>{dictionary.title}</h3>
                <p>{dictionary.description}</p>
              </div>
              <span>{dictionary.status}</span>
            </div>
            <div className="tags">
              {dictionary.items.map((item) => (
                <span className="tag" key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
