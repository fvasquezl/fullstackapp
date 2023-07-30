
import Image from "next/image"
import styles from "./page.module.css"
import Button from "@/components/Button/Button"

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    className={styles.img}
                    src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true}
                    alt=''
                />

                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who are We?</h1>

                    <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quasi impedit cum eveniet sapiente inventore rerum commodi molestias. Corporis aut repudiandae nulla placeat culpa beatae saepe nesciunt tempore quas facere.
                        <br />
                        <br />
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, et, facere corporis obcaecati voluptas repellat sapiente ipsam expedita harum tenetur repudiandae quibusdam perspiciatis culpa id fugiat fuga iure quas ullam!
                    </p>

                </div>

                <div className={styles.item}>
                    <h1 className={styles.title}>What we do?</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quasi impedit cum eveniet sapiente inventore rerum commodi molestias. Corporis aut repudiandae nulla placeat culpa beatae saepe nesciunt tempore quas facere.
                        <br />
                        <br /> -Dynamic Websites
                        <br />
                        <br /> -Fast and handly
                        <br />
                        <br /> - Mobile Apps
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About