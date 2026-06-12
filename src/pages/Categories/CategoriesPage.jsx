import { useState } from "react";

import { CategoriesTable } from "./components/CategoriesTable";
import { CategoryForm } from "./components/CategoryForm";
import { categoriesDemoData, emptyCategoryForm } from "./data/categoriesDemoData";

import "./CategoriesPage.css";

export function CategoriesPage() {
    const [categories, setCategories] = useState(categoriesDemoData);
    const [form, setForm] = useState(emptyCategoryForm);
    const [editingCategoryId, setEditingCategoryId] = useState(null);

    const isEditing = editingCategoryId !== null;

    function handleFormChange(field, value) {
        setForm((currentForm) => ({
            ...currentForm,
            [field]: value,
        }));
    }

    function resetForm() {
        setForm(emptyCategoryForm);
        setEditingCategoryId(null);
    }

    function handleEdit(category) {
        setEditingCategoryId(category.id);
        setForm({
            title: category.title,
            code: category.code,
            description: category.description,
        });
    }

    function handleDelete(category) {
        if (category.placesCount > 0) {
            return;
        }

        setCategories((currentCategories) => (
            currentCategories.filter((item) => item.id !== category.id)
        ));

        if (editingCategoryId === category.id) {
            resetForm();
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (isEditing) {
            setCategories((currentCategories) => (
                currentCategories.map((category) => {
                    if (category.id !== editingCategoryId) {
                        return category;
                    }

                    return {
                        ...category,
                        ...form,
                    };
                })
            ));

            resetForm();
            return;
        }

        const nextId = Math.max(0, ...categories.map((category) => category.id)) + 1;

        setCategories((currentCategories) => ([
            ...currentCategories,
            {
                id: nextId,
                ...form,
                placesCount: 0,
            },
        ]));

        resetForm();
    }

    return (
        <section className="page categories-page">
            <div className="page-header">
                <div>
                    <p className="eyebrow">Категории</p>
                    <h2>Категории объявлений</h2>
                    <p>
                        Управление основными разделами Native Places. Категории
                        используются в объявлениях, фильтрах и публичной структуре сайта.
                    </p>
                </div>

                <span className="status-badge">Демо-данные</span>
            </div>

            <CategoriesTable
                categories={categories}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <CategoryForm
                form={form}
                isEditing={isEditing}
                onChange={handleFormChange}
                onSubmit={handleSubmit}
                onCancel={resetForm}
            />
        </section>
    );
}