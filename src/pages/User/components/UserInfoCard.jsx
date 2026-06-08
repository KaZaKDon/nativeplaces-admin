export function UserInfoCard({ title, items }) {
    return (
        <article className="user-section">
            <h3>{title}</h3>

            <div className="user-info-list">
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