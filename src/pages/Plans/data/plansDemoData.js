export const planStatusItems = [
    {
        value: "active",
        title: "Активен",
    },
    {
        value: "disabled",
        title: "Отключен",
    },
    {
        value: "archived",
        title: "Архивирован",
    },
];

export const plansDemoData = [
    {
        id: 1,
        title: "Free",
        code: "free",
        price: 0,
        durationDays: 14,
        placesLimit: 1,
        usersCount: 124,
        status: "active",
    },
    {
        id: 2,
        title: "Private",
        code: "private",
        price: 500,
        durationDays: 30,
        placesLimit: 5,
        usersCount: 43,
        status: "active",
    },
    {
        id: 3,
        title: "Realtor",
        code: "realtor",
        price: 1500,
        durationDays: 30,
        placesLimit: 30,
        usersCount: 18,
        status: "active",
    },
    {
        id: 4,
        title: "Business",
        code: "business",
        price: 3000,
        durationDays: 30,
        placesLimit: 100,
        usersCount: 7,
        status: "active",
    },
    {
        id: 5,
        title: "Old Business",
        code: "old_business",
        price: 2500,
        durationDays: 30,
        placesLimit: 50,
        usersCount: 2,
        status: "archived",
    },
];

export const emptyPlanForm = {
    title: "",
    code: "",
    price: "",
    durationDays: "",
    placesLimit: "",
    status: "active",
};