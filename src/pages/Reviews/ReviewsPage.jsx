import { useMemo } from "react";
import { useParams } from "react-router-dom";

import { ReviewsStatusTabs } from "./components/ReviewsStatusTabs";
import { ReviewsTable } from "./components/ReviewsTable";

import {
  reviewsDemoData,
  reviewStatusItems,
} from "./data/reviewsDemoData";

import { filterReviews } from "./utils/reviewsFilters";

import "./ReviewsPage.css";

export function ReviewsPage() {
  const { status } = useParams();

  const currentStatus = status || "all";

  const filteredReviews = useMemo(() => {
    return filterReviews(reviewsDemoData, currentStatus);
  }, [currentStatus]);

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Отзывы</p>

          <h2>Модерация отзывов</h2>

          <p>
            Здесь модераторы проверяют отзывы пользователей, публикацию и
            отклонение отзывов.
          </p>
        </div>

        <span className="status-badge">Демо-данные</span>
      </div>

      <ReviewsStatusTabs items={reviewStatusItems} />

      <ReviewsTable reviews={filteredReviews} />
    </section>
  );
}