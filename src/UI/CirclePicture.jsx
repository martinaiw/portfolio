import styles from "./CirclePicture.module.css";

function CirclePicture({ image, alt }) {
	return (
		<div className={styles.circlePictureContainer}>
			<img src={image} alt={alt} className={styles.circlePicture} />
		</div>
	);
}
export default CirclePicture;
