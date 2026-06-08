export function UserManagementCard() {
    return (
        <article className="user-section">
            <h3>Управление пользователем</h3>

            <div className="user-management">
                <label className="user-management__field">
                    <span>Роль</span>

                    <select defaultValue="user">
                        <option value="user">
                            Пользователь
                        </option>

                        <option value="moderator">
                            Модератор
                        </option>

                        <option value="admin">
                            Администратор
                        </option>
                    </select>
                </label>

                <button
                    type="button"
                    className="user-action-button user-action-button--primary"
                >
                    Сохранить роль
                </button>

                <button
                    type="button"
                    className="user-action-button user-action-button--warning"
                >
                    Заблокировать
                </button>

                <button
                    type="button"
                    className="user-action-button"
                >
                    Разблокировать
                </button>
            </div>
        </article>
    );
}