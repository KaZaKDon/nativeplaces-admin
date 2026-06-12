import { useState } from "react";

import { PlaceTypeForm } from "./components/PlaceTypeForm";
import { PlaceTypesTable } from "./components/PlaceTypesTable";
import {
  categoriesForPlaceTypes,
  emptyPlaceTypeForm,
  placeTypesDemoData,
} from "./data/placeTypesDemoData";

import "./PlaceTypesPage.css";

export function PlaceTypesPage() {
  const [placeTypes, setPlaceTypes] = useState(placeTypesDemoData);
  const [form, setForm] = useState(emptyPlaceTypeForm);
  const [editingTypeId, setEditingTypeId] = useState(null);

  const isEditing = editingTypeId !== null;

  function handleFormChange(field, value) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  function resetForm() {
    setForm(emptyPlaceTypeForm);
    setEditingTypeId(null);
  }

  function handleEdit(type) {
    setEditingTypeId(type.id);
    setForm({
      categoryCode: type.categoryCode,
      title: type.title,
      code: type.code,
    });
  }

  function handleDelete(type) {
    if (type.placesCount > 0) {
      return;
    }

    setPlaceTypes((currentTypes) => (
      currentTypes.filter((item) => item.id !== type.id)
    ));

    if (editingTypeId === type.id) {
      resetForm();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const category = categoriesForPlaceTypes.find((item) => (
      item.code === form.categoryCode
    ));

    if (!category) {
      return;
    }

    if (isEditing) {
      setPlaceTypes((currentTypes) => (
        currentTypes.map((type) => {
          if (type.id !== editingTypeId) {
            return type;
          }

          return {
            ...type,
            categoryCode: form.categoryCode,
            categoryTitle: category.title,
            title: form.title,
            code: form.code,
          };
        })
      ));

      resetForm();
      return;
    }

    const nextId = Math.max(0, ...placeTypes.map((type) => type.id)) + 1;

    setPlaceTypes((currentTypes) => ([
      ...currentTypes,
      {
        id: nextId,
        categoryCode: form.categoryCode,
        categoryTitle: category.title,
        title: form.title,
        code: form.code,
        placesCount: 0,
      },
    ]));

    resetForm();
  }

  return (
    <section className="page place-types-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Типы объектов</p>
          <h2>Типы объектов внутри категорий</h2>
          <p>
            Управление подтипами объявлений. Тип объекта уточняет,
            что именно пользователь размещает внутри выбранной категории.
          </p>
        </div>

        <span className="status-badge">Демо-данные</span>
      </div>

      <PlaceTypesTable
        placeTypes={placeTypes}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <PlaceTypeForm
        categories={categoriesForPlaceTypes}
        form={form}
        isEditing={isEditing}
        onChange={handleFormChange}
        onSubmit={handleSubmit}
        onCancel={resetForm}
      />
    </section>
  );
}