const API_BASE_URL = "/api";

async function request(path, options = {}) {
    const url = `${API_BASE_URL}${path}`;

    const response = await fetch(url, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });

    const text = await response.text();

    let data;

    try {
        data = JSON.parse(text);
    } catch {
        console.error("API вернул не JSON:", {
            url,
            status: response.status,
            text,
        });

        throw new Error(`API вернул не JSON: ${url}`);
    }

    if (!response.ok || data.success === false) {
        throw new Error(data.message || "Ошибка запроса к API");
    }

    return data.data;
}

export const apiClient = {
    get(path) {
        return request(path);
    },

    post(path, body) {
        return request(path, {
            method: "POST",
            body: JSON.stringify(body),
        });
    },
};