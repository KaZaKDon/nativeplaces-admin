export const moderatorFilterItems = [
    {
        value: "all",
        title: "Все модераторы",
    },
    {
        value: "anna",
        title: "Анна Иванова",
    },
    {
        value: "ivan",
        title: "Иван Петров",
    },
    {
        value: "admin",
        title: "Администратор",
    },
];

export const sectionFilterItems = [
    {
        value: "all",
        title: "Все разделы",
    },
    {
        value: "places",
        title: "Объявления",
    },
    {
        value: "reviews",
        title: "Отзывы",
    },
    {
        value: "reports",
        title: "Жалобы",
    },
    {
        value: "payments",
        title: "Платежи",
    },
    {
        value: "users",
        title: "Пользователи",
    },
];

export const actionFilterItems = [
    {
        value: "all",
        title: "Все действия",
    },
    {
        value: "approve",
        title: "Одобрение",
    },
    {
        value: "reject",
        title: "Отклонение",
    },
    {
        value: "resolve",
        title: "Закрытие",
    },
    {
        value: "block",
        title: "Блокировка",
    },
    {
        value: "unblock",
        title: "Разблокировка",
    },
    {
        value: "status_change",
        title: "Изменение статуса",
    },
];

export const periodFilterItems = [
    {
        value: "all",
        title: "Все время",
    },
    {
        value: "today",
        title: "Сегодня",
    },
    {
        value: "week",
        title: "7 дней",
    },
    {
        value: "month",
        title: "30 дней",
    },
];

export const moderatorLogsDemoData = [
    {
        id: 124,
        createdAt: "08.06.2026 10:15",
        period: "today",
        moderatorId: "anna",
        moderatorName: "Анна Иванова",
        actionCode: "approve",
        actionTitle: "Одобрил объявление",
        sectionCode: "places",
        sectionTitle: "Объявления",
        targetTitle: "Дом у Дона",
    },
    {
        id: 125,
        createdAt: "08.06.2026 10:25",
        period: "today",
        moderatorId: "ivan",
        moderatorName: "Иван Петров",
        actionCode: "reject",
        actionTitle: "Отклонил отзыв",
        sectionCode: "reviews",
        sectionTitle: "Отзывы",
        targetTitle: "Отзыв #54",
    },
    {
        id: 126,
        createdAt: "08.06.2026 11:02",
        period: "today",
        moderatorId: "anna",
        moderatorName: "Анна Иванова",
        actionCode: "resolve",
        actionTitle: "Закрыл жалобу",
        sectionCode: "reports",
        sectionTitle: "Жалобы",
        targetTitle: "Жалоба #12",
    },
    {
        id: 127,
        createdAt: "08.06.2026 11:40",
        period: "today",
        moderatorId: "admin",
        moderatorName: "Администратор",
        actionCode: "status_change",
        actionTitle: "Изменил статус платежа",
        sectionCode: "payments",
        sectionTitle: "Платежи",
        targetTitle: "Платёж #204",
    },
    {
        id: 128,
        createdAt: "08.06.2026 12:10",
        period: "today",
        moderatorId: "ivan",
        moderatorName: "Иван Петров",
        actionCode: "block",
        actionTitle: "Заблокировал пользователя",
        sectionCode: "users",
        sectionTitle: "Пользователи",
        targetTitle: "sergey@mail.ru",
    },
    {
        id: 129,
        createdAt: "07.06.2026 15:35",
        period: "week",
        moderatorId: "anna",
        moderatorName: "Анна Иванова",
        actionCode: "approve",
        actionTitle: "Одобрил отзыв",
        sectionCode: "reviews",
        sectionTitle: "Отзывы",
        targetTitle: "Отзыв #51",
    },
    {
        id: 130,
        createdAt: "07.06.2026 16:20",
        period: "week",
        moderatorId: "ivan",
        moderatorName: "Иван Петров",
        actionCode: "reject",
        actionTitle: "Отклонил объявление",
        sectionCode: "places",
        sectionTitle: "Объявления",
        targetTitle: "Платный пруд без контактов",
    },
    {
        id: 131,
        createdAt: "06.06.2026 09:50",
        period: "week",
        moderatorId: "admin",
        moderatorName: "Администратор",
        actionCode: "unblock",
        actionTitle: "Разблокировал пользователя",
        sectionCode: "users",
        sectionTitle: "Пользователи",
        targetTitle: "user_45",
    },
    {
        id: 132,
        createdAt: "01.06.2026 18:10",
        period: "month",
        moderatorId: "anna",
        moderatorName: "Анна Иванова",
        actionCode: "approve",
        actionTitle: "Одобрил объявление",
        sectionCode: "places",
        sectionTitle: "Объявления",
        targetTitle: "База отдыха «Берег»",
    },
    {
        id: 133,
        createdAt: "29.05.2026 14:44",
        period: "month",
        moderatorId: "ivan",
        moderatorName: "Иван Петров",
        actionCode: "resolve",
        actionTitle: "Закрыл жалобу",
        sectionCode: "reports",
        sectionTitle: "Жалобы",
        targetTitle: "Жалоба #8",
    },
];