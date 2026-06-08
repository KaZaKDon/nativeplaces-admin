import { useNavigate } from "react-router-dom";
import "./BackButton.css";

export function BackButton() {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            className="back-link"
            onClick={() => navigate(-1)}
        >
            ← Назад
        </button>
    );
}