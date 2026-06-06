export function Topbar({ pageTitle, theme, onToggleTheme }) {
    return (
        <header className="topbar">
            <div>
                <span className="topbar__label">Административная панель</span>
                <h1>{pageTitle}</h1>
            </div>

            <div className="topbar__actions">
                <button className="theme-toggle" type="button" onClick={onToggleTheme}>
                    {theme === "dark" ? "☀️ Светлая" : "🌙 Тёмная"}
                </button>

                <div className="admin-user">
                    <span>Роль</span>
                    <strong>Администратор</strong>
                </div>
            </div>
        </header>
    );
}