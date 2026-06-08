export const reportStatusItems = [{
        value: "all",
        label: "Все",
        count: 12,
    },
    {
        value: "new",
        label: "Новые",
        count: 4,
    },
    {
        value: "processing",
        label: "В работе",
        count: 3,
    },
    {
        value: "resolved",
        label: "Решённые",
        count: 5,
    },
];

export const reportsDemoData = [{
        id: 101,
        type: "place",
        title: "Недостоверная информация",
        status: "new",
        placeId: 125,
        placeTitle: "База отдыха Донская",
        userId: 1,
        userName: "Иван Петров",
        createdAt: "09.06.2026",
    },
    {
        id: 102,
        type: "user",
        title: "Спам в сообщениях",
        status: "processing",
        userId: 2,
        userName: "Павел Донцов",
        createdAt: "08.06.2026",
    },
    {
        id: 103,
        type: "review",
        title: "Оскорбительный отзыв",
        status: "resolved",
        placeId: 126,
        placeTitle: "Озеро Лебяжье",
        userId: 3,
        userName: "Мария Иванова",
        createdAt: "07.06.2026",
    },
];