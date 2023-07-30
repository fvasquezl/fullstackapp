
import Image from "next/image"
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 Lamamia, All rights reserved</div>
            <div className={styles.social}>
                <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Lama dev Facebook" />
                <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Lama dev Instagran" />
                <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Lama dev" />
                <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Lama dev" />
            </div>
        </div>
    )
}

export default Footer