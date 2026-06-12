export function PlaceTypeForm({
    categories,
    form,
    isEditing,
    onChange,
    onSubmit,
    onCancel,
}) {
    return (
        <form className="place-type-form" onSubmit={onSubmit}>
            <div className="place-type-form__header">
                <div>
                    <p className="eyebrow">Справочник</p>
                    <h3>{isEditing ? "Изменить тип объекта" : "Добавить тип объекта"}</h3>
                    <p>
                        Тип объекта привязывается к категории и используется в форме
                        объявления, фильтрах и карточке объекта.
                    </p>
                </div>

                {isEditing && (
                    <button
                        className="place-type-form__cancel"
                        type="button"
                        onClick={onCancel}
                    >
                        Отменить
                    </button>
                )}
            </div>

            <div className="place-type-form__grid">
                <label className="place-type-form__field">
                    <span>Категория</span>
                    <select
                        value={form.categoryCode}
                        onChange={(event) => onChange("categoryCode", event.target.value)}
                        required
                    >
                        <option value="">Выберите категорию</option>

                        {categories.map((category) => (
                            <option key={category.code} value={category.code}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="place-type-form__field">
                    <span>Название</span>
                    <input
                        type="text"
                        value={form.title}
                        onChange={(event) => onChange("title", event.target.value)}
                        placeholder="Например: Пруд"
                        required
                    />
                </label>

                <label className="place-type-form__field">
                    <span>Код</span>
                    <input
                        type="text"
                        value={form.code}
                        onChange={(event) => onChange("code", event.target.value)}
                        placeholder="Например: pond"
                        required
                    />
                </label>
            </div>

            <button className="place-type-form__submit" type="submit">
                {isEditing ? "Сохранить изменения" : "Добавить тип объекта"}
            </button>
        </form>
    );
}