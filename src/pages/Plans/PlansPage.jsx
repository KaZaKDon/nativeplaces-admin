import { useMemo, useState } from "react";

import { PlanForm } from "./components/PlanForm";
import { PlansStats } from "./components/PlansStats";
import { PlansTable } from "./components/PlansTable";
import {
    emptyPlanForm,
    planStatusItems,
    plansDemoData,
} from "./data/plansDemoData";

import "./PlansPage.css";

export function PlansPage() {
    const [plans, setPlans] = useState(plansDemoData);
    const [form, setForm] = useState(emptyPlanForm);
    const [editingPlanId, setEditingPlanId] = useState(null);

    const isEditing = editingPlanId !== null;

    const stats = useMemo(() => ({
        total: plans.length,
        active: plans.filter((plan) => plan.status === "active").length,
        disabled: plans.filter((plan) => plan.status === "disabled").length,
        archived: plans.filter((plan) => plan.status === "archived").length,
    }), [plans]);

    function handleFormChange(field, value) {
        setForm((currentForm) => ({
            ...currentForm,
            [field]: value,
        }));
    }

    function resetForm() {
        setForm(emptyPlanForm);
        setEditingPlanId(null);
    }

    function handleEdit(plan) {
        setEditingPlanId(plan.id);
        setForm({
            title: plan.title,
            code: plan.code,
            price: String(plan.price),
            durationDays: String(plan.durationDays),
            placesLimit: String(plan.placesLimit),
            status: plan.status,
        });
    }

    function handleChangeStatus(plan, status) {
        setPlans((currentPlans) => (
            currentPlans.map((item) => {
                if (item.id !== plan.id) {
                    return item;
                }

                return {
                    ...item,
                    status,
                };
            })
        ));

        if (editingPlanId === plan.id) {
            handleFormChange("status", status);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const normalizedPlan = {
            title: form.title,
            code: form.code,
            price: Number(form.price),
            durationDays: Number(form.durationDays),
            placesLimit: Number(form.placesLimit),
            status: form.status,
        };

        if (isEditing) {
            setPlans((currentPlans) => (
                currentPlans.map((plan) => {
                    if (plan.id !== editingPlanId) {
                        return plan;
                    }

                    return {
                        ...plan,
                        ...normalizedPlan,
                    };
                })
            ));

            resetForm();
            return;
        }

        const nextId = Math.max(0, ...plans.map((plan) => plan.id)) + 1;

        setPlans((currentPlans) => ([
            ...currentPlans,
            {
                id: nextId,
                ...normalizedPlan,
                usersCount: 0,
            },
        ]));

        resetForm();
    }

    return (
        <section className="page plans-page">
            <div className="page-header">
                <div>
                    <p className="eyebrow">Тарифы</p>
                    <h2>Тарифные планы Native Places</h2>
                    <p>
                        Управление тарифами для частных пользователей, риэлторов и
                        бизнеса. Тарифы не удаляются, чтобы сохранить историю платежей
                        и подписок.
                    </p>
                </div>

                <span className="status-badge">Демо-данные</span>
            </div>

            <PlansStats stats={stats} />

            <PlansTable
                plans={plans}
                statusItems={planStatusItems}
                onEdit={handleEdit}
                onChangeStatus={handleChangeStatus}
            />

            <PlanForm
                form={form}
                statusItems={planStatusItems}
                isEditing={isEditing}
                onChange={handleFormChange}
                onSubmit={handleSubmit}
                onCancel={resetForm}
            />
        </section>
    );
}