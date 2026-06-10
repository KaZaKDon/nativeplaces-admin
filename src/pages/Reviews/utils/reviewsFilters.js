export function filterReviews(reviews, status) {
    if (status === "all") {
        return reviews;
    }

    return reviews.filter((review) => review.status === status);
}