import React from "react";
import styles from "./style";
import { Post } from "./../post/component";

const PostsContainer = (props) => {

    return (
        <div className={styles.PostsCOntainer}>
            { props.posts.map(post => <Post key={post.slug} { ...post } />) }
        </div>
    )
}

export { PostsContainer };
