import { Link } from "react-router-dom";

export function PlaceInfoCard({ title, items, action }) {
    return (
        <article className="place-section">
            <div className="place-section__header">
                <h3>{title}</h3>

                {action ? (
                    <Link className="table-action" to={action.to}>
                        {action.label}
                    </Link>
                ) : null}
            </div>

            <div className="place-info-list">
                {items.map((item) => (
                    <div key={item.label}>
                        <span>{item.label}</span>
                        <strong>{item.value}</strong>
                    </div>
                ))}
            </div>
        </article>
    );
}