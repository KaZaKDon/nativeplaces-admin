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
import { NotFoundState } from "../../components/NotFoundState/NotFoundState";

import "./PlacePage.css";

function findDemoPlaceById(placeId) {
    if (String(placeDemoData.id) === String(placeId)) {
        return placeDemoData;
    }

    return null;
}

function createMainInfo(place) {
    return [
        {
            label: "ID",
            value: `#${place.id}`,
        },
        {
            label: "Категория",
            value: place.category,
        },
        {
            label: "Тип",
            value: place.type,
        },
        {
            label: "Создано",
            value: place.createdAt,
        },
        {
            label: "Обновлено",
            value: place.updatedAt,
        },
    ];
}

function createOwnerInfo(place) {
    return [
        {
            label: "Имя",
            value: place.owner.name,
        },
        {
            label: "Email",
            value: place.owner.email,
        },
        {
            label: "Телефон",
            value: place.owner.phone,
        },
    ];
}

function createContactInfo(place) {
    return [
        {
            label: "Контакт",
            value: place.contacts.name,
        },
        {
            label: "Телефон",
            value: place.contacts.phone,
        },
        {
            label: "Telegram",
            value: place.contacts.telegram,
        },
        {
            label: "Email",
            value: place.contacts.email,
        },
    ];
}

export function PlacePage() {
    const { placeId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const backTo = location.state?.from || "/places/pending";
    const place = findDemoPlaceById(placeId);

    function handlePublish() {
        alert("Демо: объявление опубликовано");
        navigate(backTo);
    }

    function handleReject(comment) {
        alert(`Демо: объявление отклонено. Причина: ${comment}`);
        navigate(backTo);
    }

    if (!place) {
        return (
            <NotFoundState
                eyebrow={`Платёж #${placeId}`}
                title="Платёж не найден"
                description="В демо-данных нет объявления с таким ID. Позже здесь будет обработка ответа API."
            />
        );
    }

    const mainInfo = createMainInfo(place);
    const ownerInfo = createOwnerInfo(place);
    const contactInfo = createContactInfo(place);

    return (
        <section className="page">
            <BackButton fallbackTo="/places/pending" />

            <div className="page-header">
                <div>
                    <p className="eyebrow">Объявление #{place.id}</p>

                    <h2>{place.title}</h2>

                    <p>{place.shortDescription}</p>
                </div>

                <StatusBadge status={place.status} />
            </div>

            <div className="place-page-grid">
                <div className="place-page-main">
                    <article className="place-section">
                        <h3>Описание</h3>

                        <p>{place.fullDescription}</p>
                    </article>

                    <article className="place-section">
                        <h3>Фотографии</h3>

                        <PlaceGallery images={place.images} />
                    </article>

                    <article className="place-section">
                        <h3>Характеристики</h3>

                        <PlaceAttributes attributes={place.attributes} />
                    </article>
                </div>

                <aside className="place-page-aside">
                    <PlacePlacementCard placement={place.placement} />

                    <PlaceInfoCard title="Основное" items={mainInfo} />

                    <PlaceInfoCard
                        title="Владелец"
                        items={ownerInfo}
                        action={{
                            label: "Открыть",
                            to: `/users/view/${place.owner.id}`,
                        }}
                    />

                    <PlaceInfoCard title="Контакты объявления" items={contactInfo} />

                    <PlaceModeration onPublish={handlePublish} onReject={handleReject} />

                    <PlaceHistory history={place.history} />
                </aside>
            </div>
        </section>
    );
}