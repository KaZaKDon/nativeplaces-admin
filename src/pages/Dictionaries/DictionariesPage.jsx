import { useMemo, useState } from "react";

import { DictionaryGroupForm } from "./components/DictionaryGroupForm";
import { DictionaryGroupsTable } from "./components/DictionaryGroupsTable";
import { DictionaryValueForm } from "./components/DictionaryValueForm";
import { DictionaryValuesTable } from "./components/DictionaryValuesTable";
import {
    dictionaryGroupsDemoData,
    dictionaryValuesDemoData,
    emptyDictionaryGroupForm,
    emptyDictionaryValueForm,
} from "./data/dictionariesDemoData";

import "./DictionariesPage.css";

export function DictionariesPage() {
    const [groups, setGroups] = useState(dictionaryGroupsDemoData);
    const [values, setValues] = useState(dictionaryValuesDemoData);
    const [selectedGroupId, setSelectedGroupId] = useState(groups[0]?.id ?? null);

    const [groupForm, setGroupForm] = useState(emptyDictionaryGroupForm);
    const [valueForm, setValueForm] = useState(emptyDictionaryValueForm);

    const [editingGroupId, setEditingGroupId] = useState(null);
    const [editingValueId, setEditingValueId] = useState(null);

    const isEditingGroup = editingGroupId !== null;
    const isEditingValue = editingValueId !== null;

    const groupsWithCounters = useMemo(() => (
        groups.map((group) => ({
            ...group,
            valuesCount: values.filter((value) => value.groupId === group.id).length,
        }))
    ), [groups, values]);

    const selectedGroup = groupsWithCounters.find((group) => group.id === selectedGroupId);

    const selectedValues = values.filter((value) => value.groupId === selectedGroupId);

    function handleGroupFormChange(field, value) {
        setGroupForm((currentForm) => ({
            ...currentForm,
            [field]: value,
        }));
    }

    function handleValueFormChange(field, value) {
        setValueForm((currentForm) => ({
            ...currentForm,
            [field]: value,
        }));
    }

    function resetGroupForm() {
        setGroupForm(emptyDictionaryGroupForm);
        setEditingGroupId(null);
    }

    function resetValueForm() {
        setValueForm(emptyDictionaryValueForm);
        setEditingValueId(null);
    }

    function handleOpenGroup(group) {
        setSelectedGroupId(group.id);
        resetValueForm();
    }

    function handleEditGroup(group) {
        setEditingGroupId(group.id);
        setGroupForm({
            title: group.title,
            code: group.code,
        });
    }

    function handleDeleteGroup(group) {
        if (group.usedInAttributes.length > 0) {
            return;
        }

        setGroups((currentGroups) => (
            currentGroups.filter((item) => item.id !== group.id)
        ));

        setValues((currentValues) => (
            currentValues.filter((item) => item.groupId !== group.id)
        ));

        if (selectedGroupId === group.id) {
            const nextGroup = groups.find((item) => item.id !== group.id);
            setSelectedGroupId(nextGroup?.id ?? null);
        }

        if (editingGroupId === group.id) {
            resetGroupForm();
        }
    }

    function handleEditValue(value) {
        setEditingValueId(value.id);
        setValueForm({
            title: value.title,
        });
    }

    function handleDeleteValue(value) {
        setValues((currentValues) => (
            currentValues.filter((item) => item.id !== value.id)
        ));

        if (editingValueId === value.id) {
            resetValueForm();
        }
    }

    function handleGroupSubmit(event) {
        event.preventDefault();

        if (isEditingGroup) {
            setGroups((currentGroups) => (
                currentGroups.map((group) => {
                    if (group.id !== editingGroupId) {
                        return group;
                    }

                    return {
                        ...group,
                        title: groupForm.title,
                        code: groupForm.code,
                    };
                })
            ));

            resetGroupForm();
            return;
        }

        const nextId = Math.max(0, ...groups.map((group) => group.id)) + 1;

        setGroups((currentGroups) => ([
            ...currentGroups,
            {
                id: nextId,
                title: groupForm.title,
                code: groupForm.code,
                usedInAttributes: [],
            },
        ]));

        setSelectedGroupId(nextId);
        resetGroupForm();
    }

    function handleValueSubmit(event) {
        event.preventDefault();

        if (!selectedGroupId) {
            return;
        }

        if (isEditingValue) {
            setValues((currentValues) => (
                currentValues.map((value) => {
                    if (value.id !== editingValueId) {
                        return value;
                    }

                    return {
                        ...value,
                        title: valueForm.title,
                    };
                })
            ));

            resetValueForm();
            return;
        }

        const nextId = Math.max(0, ...values.map((value) => value.id)) + 1;

        setValues((currentValues) => ([
            ...currentValues,
            {
                id: nextId,
                groupId: selectedGroupId,
                title: valueForm.title,
            },
        ]));

        resetValueForm();
    }

    return (
        <section className="page dictionaries-page">
            <div className="page-header">
                <div>
                    <p className="eyebrow">Справочники</p>
                    <h2>Группы и значения справочников</h2>
                    <p>
                        Справочники хранят повторяющиеся значения для характеристик:
                        виды рыб, виды охоты, услуги, материалы стен и другие списки.
                    </p>
                </div>

                <span className="status-badge">Демо-данные</span>
            </div>

            <DictionaryGroupsTable
                groups={groupsWithCounters}
                selectedGroupId={selectedGroupId}
                onOpen={handleOpenGroup}
                onEdit={handleEditGroup}
                onDelete={handleDeleteGroup}
            />

            <DictionaryGroupForm
                form={groupForm}
                isEditing={isEditingGroup}
                onChange={handleGroupFormChange}
                onSubmit={handleGroupSubmit}
                onCancel={resetGroupForm}
            />

            <DictionaryValuesTable
                selectedGroup={selectedGroup}
                values={selectedValues}
                onEdit={handleEditValue}
                onDelete={handleDeleteValue}
            />

            <DictionaryValueForm
                selectedGroup={selectedGroup}
                form={valueForm}
                isEditing={isEditingValue}
                onChange={handleValueFormChange}
                onSubmit={handleValueSubmit}
                onCancel={resetValueForm}
            />
        </section>
    );
}