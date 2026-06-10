export function getPlaceCategories(places) {
    return Array.from(new Set(places.map((place) => place.category)));
}

export function filterPlaces(places, filters) {
    const {
        status,
        search,
        category
    } = filters;
    const normalizedSearch = search.trim().toLowerCase();

    return places.filter((place) => {
        const matchesStatus = status === "all" || place.status === status;
        const matchesCategory = category === "all" || place.category === category;

        const matchesSearch =
            normalizedSearch === "" ||
            place.title.toLowerCase().includes(normalizedSearch) ||
            place.owner.toLowerCase().includes(normalizedSearch) ||
            place.category.toLowerCase().includes(normalizedSearch) ||
            place.type.toLowerCase().includes(normalizedSearch);

        return matchesStatus && matchesCategory && matchesSearch;
    });
}