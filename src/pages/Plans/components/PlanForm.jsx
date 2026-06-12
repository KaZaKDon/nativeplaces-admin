export function PlanForm({
    form,
    statusItems,
    isEditing,
    onChange,
    onSubmit,
    onCancel,
}) {
    return (
        <form className="plan-form" onSubmit={onSubmit}>
            <div className="plan-form__header">
                <div>
                    <p className="eyebrow">Тарифный план</p>
                    <h3>{isEditing ? "Изменить тариф" : "Добавить тариф"}</h3>
                    <p>
                        Тариф определяет стоимость размещения, срок публикации и лимит
                        объявлений для пользователя.
                    </p>
                </div>

                {isEditing && (
                    <button
                        className="plan-form__cancel"
                        type="button"
                        onClick={onCancel}
                    >
                        Отменить
                    </button>
                )}
            </div>

            <div className="plan-form__grid">
                <label className="plan-form__field">
                    <span>Название</span>
                    <input
                        type="text"
                        value={form.title}
                        onChange={(event) => onChange("title", event.target.value)}
                        placeholder="Например: Realtor"
                        required
                    />
                </label>

                <label className="plan-form__field">
                    <span>Код</span>
                    <input
                        type="text"
                        value={form.code}
                        onChange={(event) => onChange("code", event.target.value)}
                        placeholder="Например: realtor"
                        required
                    />
                </label>

                <label className="plan-form__field">
                    <span>Цена, ₽</span>
                    <input
                        type="number"
                        min="0"
                        value={form.price}
                        onChange={(event) => onChange("price", event.target.value)}
                        placeholder="1500"
                        required
                    />
                </label>

                <label className="plan-form__field">
                    <span>Срок, дней</span>
                    <input
                        type="number"
                        min="1"
                        value={form.durationDays}
                        onChange={(event) => onChange("durationDays", event.target.value)}
                        placeholder="30"
                        required
                    />
                </label>

                <label className="plan-form__field">
                    <span>Лимит объявлений</span>
                    <input
                        type="number"
                        min="1"
                        value={form.placesLimit}
                        onChange={(event) => onChange("placesLimit", event.target.value)}
                        placeholder="30"
                        required
                    />
                </label>

                <label className="plan-form__field">
                    <span>Статус</span>
                    <select
                        value={form.status}
                        onChange={(event) => onChange("status", event.target.value)}
                        required
                    >
                        {statusItems.map((status) => (
                            <option key={status.value} value={status.value}>
                                {status.title}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <button className="plan-form__submit" type="submit">
                {isEditing ? "Сохранить изменения" : "Добавить тариф"}
            </button>
        </form>
    );
}