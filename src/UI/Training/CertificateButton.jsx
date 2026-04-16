import { useState } from "react";
import certificateBtn from "../../assets/images/certificateBtn.png";
import styles from "./CertificateButton.module.css";

function CertificateButton({ certificateUrl, isLink = false }) {
    const [showImage, setShowImage] = useState(false);

    const handleClick = () => {
        if (isLink) {
            window.open(certificateUrl, "_blank", "noopener,noreferrer");
        } else {
            setShowImage(true);
        }
    };

    return (
        <>
            <img
                src={certificateBtn}
                onClick={handleClick}
                className={styles.triggerBtn}
                alt="Ver certificado"
            />

            {!isLink && showImage && (
                <div className={styles.modelOverlay} onClick={() => setShowImage(false)}>
                    <div className={styles.modelContent} onClick={(e) => e.stopPropagation()}>
                        <img
                            src={certificateUrl}
                            alt="Certificado extendido"
                            className={styles.fullImage}
                            onClick={() => setShowImage(false)}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default CertificateButton;