import Button from "@/components/Button/Button"
import styles from "./page.module.css"
import Image from "next/image"

const Category = ({ params }) => {

    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum recusandae voluptas excepturi nemo magnam nam ducimus modi eius porro! Iure voluptas ullam reprehenderit hic recusandae nisi veniam minus ea?</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum recusandae voluptas excepturi nemo magnam nam ducimus modi eius porro! Iure voluptas ullam reprehenderit hic recusandae nisi veniam minus ea?</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dolorum recusandae voluptas excepturi nemo magnam nam ducimus modi eius porro! Iure voluptas ullam reprehenderit hic recusandae nisi veniam minus ea?</p>
                    <Button text="See More" url="#" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Category