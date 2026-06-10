export function filterUsers(users, status) {
    if (status === "all") {
        return users;
    }

    if (status === "moderator" || status === "admin") {
        return users.filter((user) => user.role === status);
    }

    return users.filter((user) => user.status === status);
}