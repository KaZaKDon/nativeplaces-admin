import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { PlacesStatusTabs } from "./components/PlacesStatusTabs";
import { PlacesTable } from "./components/PlacesTable";
import { PlacesFilters } from "./components/PlacesFilters";
import {
  placesDemoData,
  placeStatusItems,
} from "./data/placesDemoData";

import "./PlacesPage.css";

export function PlacesPage() {
  const { status } = useParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const currentStatus = status || "all";

  const categories = useMemo(() => {
    return Array.from(new Set(placesDemoData.map((place) => place.category)));
  }, []);

  const filteredPlaces = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return placesDemoData.filter((place) => {
      const matchesStatus =
        currentStatus === "all" || place.status === currentStatus;

      const matchesCategory =
        category === "all" || place.category === category;

      const matchesSearch =
        normalizedSearch === "" ||
        place.title.toLowerCase().includes(normalizedSearch) ||
        place.owner.toLowerCase().includes(normalizedSearch) ||
        place.category.toLowerCase().includes(normalizedSearch) ||
        place.type.toLowerCase().includes(normalizedSearch);

      return matchesStatus && matchesCategory && matchesSearch;
    });
  }, [currentStatus, search, category]);

  function resetFilters() {
    setSearch("");
    setCategory("all");
  }

  return (
    <section className="page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Объявления</p>

          <h2>Управление объявлениями</h2>

          <p>
            Здесь будет список всех объявлений, модерация, публикация,
            отклонение и перенос в архив.
          </p>
        </div>

        <span className="status-badge">Демо-данные</span>
      </div>

      <PlacesStatusTabs items={placeStatusItems} />

      <PlacesFilters
        search={search}
        category={category}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
        onReset={resetFilters}
      />

      <PlacesTable places={filteredPlaces} />
    </section>
  );
}