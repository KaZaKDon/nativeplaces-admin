import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { PlacesStatusTabs } from "./components/PlacesStatusTabs";
import { PlacesTable } from "./components/PlacesTable";
import { PlacesFilters } from "./components/PlacesFilters";
import { placesDemoData, placeStatusItems } from "./data/placesDemoData";
import { filterPlaces, getPlaceCategories } from "./utils/placesFilters";

import "./PlacesPage.css";

export function PlacesPage() {
  const { status } = useParams();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const currentStatus = status || "all";

  const categories = useMemo(() => {
    return getPlaceCategories(placesDemoData);
  }, []);

  const filteredPlaces = useMemo(() => {
    return filterPlaces(placesDemoData, {
      status: currentStatus,
      search,
      category,
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