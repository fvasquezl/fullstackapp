import Link from "next/link"
import styles from "./page.module.css"
import Image from "next/image"


const Blog = () => {
    return (
        <div className={styles.mainContainer}>
            <Link href="/blog/testId" className={styles.container} >
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.img}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
            <Link href="" className={styles.container} >
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.img}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>
            <Link href="" className={styles.container} >
                <div className={styles.imgContainer}>
                    <Image
                        src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        width={400}
                        height={250}
                        className={styles.img}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Desc</p>
                </div>
            </Link>

        </div>
    )
}

export default Blog