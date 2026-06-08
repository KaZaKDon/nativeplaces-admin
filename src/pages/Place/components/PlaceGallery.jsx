import { useState } from "react";

export function PlaceGallery({ images }) {
    const [activeImage, setActiveImage] = useState(images[0]);

    return (
        <div className="place-gallery-block">
            <div className="place-gallery-main">
                <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                />

                {activeImage.isCover && (
                    <span className="place-gallery-cover">
                        Обложка
                    </span>
                )}
            </div>

            <div className="place-gallery-thumbs">
                {images.map((image) => (
                    <button
                        key={image.id}
                        type="button"
                        className={
                            image.id === activeImage.id
                                ? "place-gallery-thumb place-gallery-thumb--active"
                                : "place-gallery-thumb"
                        }
                        onClick={() => setActiveImage(image)}
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}