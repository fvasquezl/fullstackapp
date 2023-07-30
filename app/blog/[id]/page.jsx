import Image from "next/image"
import styles from "./page.module.css"
import { notFound } from "next/navigation"

async function getData(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'no-store'
    })

    if (!res.ok) {
        notFound()
    }

    return res.json()
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id);
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        {data.title}
                    </h1>
                    <p className={styles.desc}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est repudiandae officia ea perspiciatis ex eius, nostrum nam recusandae magni necessitatibus sapiente, exercitationem tenetur adipisci beatae pariatur voluptate perferendis. Voluptates, odio!
                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>John Doe</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/16353919/pexels-photo-16353919.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque, facilis consequuntur quasi officia quod repudiandae atque vero ad blanditiis perspiciatis, sed quibusdam omnis error iusto odit, impedit fuga eveniet.
                </p>
            </div>
        </div>
    )
}

export default BlogPost