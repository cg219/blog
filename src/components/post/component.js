import React from "react";
import { Link } from "react-router-dom";
import styles from "./style";

const Post = (props) => {
    const feature = props.feature_image || "https://storage.googleapis.com/kreativemente-assets/uploads/default2.jpg";

    return (
        <section className={styles.Post}>
            <Link to={`/read/${props.slug}`} />
            <figure>
                <div className={styles.Image} style={{ backgroundImage: `url(${feature})` }}></div>
            </figure>
            <time className={styles.Date}>{props.formatted_date}</time>
            <h1 className={styles.Title}>{props.title}</h1>
            <section className={styles.Author}>
                <div className={styles.AuthorImage} style={{ backgroundImage: `url(${props.primary_author.profile_image})` }}></div>
                <span className={styles.AuthorName}>{props.primary_author.name}</span>
            </section>
            <p className={styles.Excerpt}>{props.custom_excerpt}</p>
        </section>
    )
}

export { Post }
