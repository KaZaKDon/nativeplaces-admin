import { useMemo, useState } from "react";

import { AttributeForm } from "./components/AttributeForm";
import { AttributesTable } from "./components/AttributesTable";
import {
    attributeFieldTypes,
    attributesDemoData,
    categoriesForAttributes,
    emptyAttributeForm,
} from "./data/attributesDemoData";

import "./AttributesPage.css";

export function AttributesPage() {
    const [attributes, setAttributes] = useState(attributesDemoData);
    const [form, setForm] = useState(emptyAttributeForm);
    const [editingAttributeId, setEditingAttributeId] = useState(null);

    const isEditing = editingAttributeId !== null;

    const categoryStats = useMemo(() => (
        categoriesForAttributes.map((category) => ({
            ...category,
            attributesCount: attributes.filter((attribute) => (
                attribute.categoryCode === category.code
            )).length,
        }))
    ), [attributes]);

    function handleFormChange(field, value) {
        setForm((currentForm) => ({
            ...currentForm,
            [field]: value,
        }));
    }

    function resetForm() {
        setForm(emptyAttributeForm);
        setEditingAttributeId(null);
    }

    function handleEdit(attribute) {
        setEditingAttributeId(attribute.id);
        setForm({
            categoryCode: attribute.categoryCode,
            title: attribute.title,
            key: attribute.key,
            fieldType: attribute.fieldType,
            isRequired: attribute.isRequired,
        });
    }

    function handleDelete(attribute) {
        setAttributes((currentAttributes) => (
            currentAttributes.filter((item) => item.id !== attribute.id)
        ));

        if (editingAttributeId === attribute.id) {
            resetForm();
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const category = categoriesForAttributes.find((item) => (
            item.code === form.categoryCode
        ));

        const fieldType = attributeFieldTypes.find((item) => (
            item.value === form.fieldType
        ));

        if (!category || !fieldType) {
            return;
        }

        if (isEditing) {
            setAttributes((currentAttributes) => (
                currentAttributes.map((attribute) => {
                    if (attribute.id !== editingAttributeId) {
                        return attribute;
                    }

                    return {
                        ...attribute,
                        categoryCode: form.categoryCode,
                        categoryTitle: category.title,
                        title: form.title,
                        key: form.key,
                        fieldType: form.fieldType,
                        fieldTypeTitle: fieldType.title,
                        isRequired: form.isRequired,
                    };
                })
            ));

            resetForm();
            return;
        }

        const nextId = Math.max(0, ...attributes.map((attribute) => attribute.id)) + 1;

        setAttributes((currentAttributes) => ([
            ...currentAttributes,
            {
                id: nextId,
                categoryCode: form.categoryCode,
                categoryTitle: category.title,
                title: form.title,
                key: form.key,
                fieldType: form.fieldType,
                fieldTypeTitle: fieldType.title,
                isRequired: form.isRequired,
            },
        ]));

        resetForm();
    }

    return (
        <section className="page attributes-page">
            <div className="page-header">
                <div>
                    <p className="eyebrow">Характеристики</p>
                    <h2>Динамические поля объявлений</h2>
                    <p>
                        Управление полями, которые появляются в форме создания объявления
                        в зависимости от выбранной категории.
                    </p>
                </div>

                <span className="status-badge">Демо-данные</span>
            </div>

            <div className="attributes-stats">
                {categoryStats.map((category) => (
                    <article className="attributes-stat-card" key={category.code}>
                        <span>{category.title}</span>
                        <strong>{category.attributesCount}</strong>
                    </article>
                ))}
            </div>

            <AttributesTable
                attributes={attributes}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <AttributeForm
                categories={categoriesForAttributes}
                fieldTypes={attributeFieldTypes}
                form={form}
                isEditing={isEditing}
                onChange={handleFormChange}
                onSubmit={handleSubmit}
                onCancel={resetForm}
            />
        </section>
    );
}