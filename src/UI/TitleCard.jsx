import styles from "./TitleCard.module.css";

function TitleCard({ title, width, fontSize, align = "center", paddingLeft }) {
    const flexAlign = 
        align === "left" ? "flex-start" : align === "right" ? "flex-end" : "center";

    const customStyles = { 
        "--card-width": width, 
        "--card-font-size": fontSize,
        "--flex-align": flexAlign, 
		"--text-align": align,
		"--padding-left": paddingLeft || "0px"
    };

    return (
        <div className={styles.titleCardContainer} style={customStyles}>
            <h2>{title}</h2>
        </div>
    );
}

export default TitleCard;