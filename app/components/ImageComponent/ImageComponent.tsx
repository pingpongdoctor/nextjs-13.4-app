import Image from "next/image";
import styles from "./ImageComponent.module.scss";

export default function ImageComponent() {
  return (
    <div className={styles.profileImage}>
      <Image
        className={styles.profileImageContainer}
        src="/images/profile-picture.jpg"
        alt="profile-image"
        priority={true}
        width={100}
        height={100}
      />
    </div>
  );
}
