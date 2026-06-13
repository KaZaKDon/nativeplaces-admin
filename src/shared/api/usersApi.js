import { apiClient } from "./apiClient";

export const usersApi = {
    getUsers() {
        return apiClient.get("/admin/users/index.php");
    },

    getUser(userId) {
        return apiClient.get(`/admin/users/show.php?id=${userId}`);
    },

    updateSubscription(payload) {
        return apiClient.post("/admin/users/update-subscription.php", payload);
    },
};