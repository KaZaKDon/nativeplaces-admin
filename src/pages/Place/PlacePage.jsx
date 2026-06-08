import { useLocation, useNavigate, useParams } from "react-router-dom";
import { StatusBadge } from "../../components/StatusBadge/StatusBadge";
import { placeDemoData } from "./data/placeDemoData";
import { PlaceGallery } from "./components/PlaceGallery";
import { PlaceInfoCard } from "./components/PlaceInfoCard";
import { PlaceAttributes } from "./components/PlaceAttributes";
import { PlaceModeration } from "./components/PlaceModeration";
import { PlacePlacementCard } from "./components/PlacePlacementCard";
import { PlaceHistory } from "./components/PlaceHistory";
import { BackButton } from "../../components/BackButton/BackButton";

import "./PlacePage.css";

export function PlacePage() {
    const { placeId } = useParams();

    const navigate = useNavigate();
    const location = useLocation();

    const backTo = location.state?.from || "/places/pending";

    function handlePublish() {
        alert("Демо: объявление опубликовано");
        navigate(backTo);
    }

    function handleReject(comment) {
        alert(`Демо: объявление отклонено. Причина: ${comment}`);
        navigate(backTo);
    }

    const mainInfo = [
        {
            label: "ID",
            value: `#${placeDemoData.id}`,
        },
        {
            label: "Категория",
            value: placeDemoData.category,
        },
        {
            label: "Тип",
            value: placeDemoData.type,
        },
        {
            label: "Создано",
            value: placeDemoData.createdAt,
        },
        {
            label: "Обновлено",
            value: placeDemoData.updatedAt,
        },
    ];

    const ownerInfo = [
        {
            label: "Имя",
            value: placeDemoData.owner.name,
        },
        {
            label: "Email",
            value: placeDemoData.owner.email,
        },
        {
            label: "Телефон",
            value: placeDemoData.owner.phone,
        },
    ];

    const contactInfo = [
        {
            label: "Контакт",
            value: placeDemoData.contacts.name,
        },
        {
            label: "Телефон",
            value: placeDemoData.contacts.phone,
        },
        {
            label: "Telegram",
            value: placeDemoData.contacts.telegram,
        },
        {
            label: "Email",
            value: placeDemoData.contacts.email,
        },
    ];

    return (
        <section className="page">

            <BackButton />
            
            <div className="page-header">
                <div>                    
                    <p className="eyebrow">Объявление #{placeId}</p>

                    <h2>{placeDemoData.title}</h2>

                    <p>{placeDemoData.shortDescription}</p>
                </div>

                <StatusBadge status={placeDemoData.status} />
            </div>

            <div className="place-page-grid">
                <div className="place-page-main">
                    <article className="place-section">
                        <h3>Описание</h3>

                        <p>{placeDemoData.fullDescription}</p>
                    </article>

                    <article className="place-section">
                        <h3>Фотографии</h3>

                        <PlaceGallery
                            images={placeDemoData.images}
                        />
                    </article>

                    <article className="place-section">
                        <h3>Характеристики</h3>

                        <PlaceAttributes
                            attributes={placeDemoData.attributes}
                        />
                    </article>
                </div>

                <aside className="place-page-aside">
                    <PlacePlacementCard
                        placement={placeDemoData.placement}
                    />

                    <PlaceInfoCard title="Основное" items={mainInfo} />

                    <PlaceInfoCard
                        title="Владелец"
                        items={ownerInfo}
                        action={{
                            label: "Открыть",
                            to: `/users/view/${placeDemoData.owner.id}`,
                        }}
                    />

                    <PlaceInfoCard title="Контакты объявления" items={contactInfo} />

                    <PlaceModeration
                        onPublish={handlePublish}
                        onReject={handleReject}
                    />

                    <PlaceHistory history={placeDemoData.history} />
                </aside>
            </div>
        </section>
    );
}