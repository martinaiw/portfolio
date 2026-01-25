import styles from "./ButtonProjects.module.css";
import leftBtn from "../assets/leftBtn.png";
import rightBtn from "../assets/rgtBtn.png";

function ButtonProjects({ direction, onClick }) {
    const imgSrc = direction === "left" ? leftBtn : rightBtn;

    return (
        <img
            src={imgSrc}
			alt={direction === "left" ? "Anterior" : "Siguiente"}
            className={styles.clickableImage}
            onClick={onClick}
        />
    );
}

export default ButtonProjects;
