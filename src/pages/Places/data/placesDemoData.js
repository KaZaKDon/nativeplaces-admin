export const placeStatusItems = [{
        value: "all",
        label: "Все",
        count: 24,
    },
    {
        value: "pending",
        label: "На модерации",
        count: 12,
    },
    {
        value: "published",
        label: "Опубликованные",
        count: 8,
    },
    {
        value: "rejected",
        label: "Отклонённые",
        count: 1,
    },
    {
        value: "expired",
        label: "Архив",
        count: 3,
    },
];

export const placesDemoData = [{
        id: 125,
        title: "База отдыха Донская",
        category: "Базы отдыха",
        type: "База отдыха",
        owner: "Иван Петров",
        status: "pending",
        createdAt: "07.06.2026",
    },
    {
        id: 126,
        title: "Озеро Лебяжье",
        category: "Рыбалка",
        type: "Озеро",
        owner: "Сергей Донцов",
        status: "pending",
        createdAt: "07.06.2026",
    },
    {
        id: 127,
        title: "Дом в Вёшенской",
        category: "Недвижимость",
        type: "Дом",
        owner: "Анна Соколова",
        status: "published",
        createdAt: "06.06.2026",
    },
    {
        id: 128,
        title: "Охотничье хозяйство Северное",
        category: "Охота",
        type: "Охотхозяйство",
        owner: "Павел Котов",
        status: "rejected",
        createdAt: "05.06.2026",
    },
    {
        id: 129,
        title: "Участок у реки",
        category: "Недвижимость",
        type: "Участок",
        owner: "Мария Иванова",
        status: "expired",
        createdAt: "03.06.2026",
    },
];

export const placeStatusLabels = {
    pending: "На модерации",
    published: "Опубликовано",
    rejected: "Отклонено",
    expired: "Архив",
};