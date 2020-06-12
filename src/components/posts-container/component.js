import React, { Fragment } from "react";
import styles from "./style";
import { Post } from "./../post/component";

const PostsContainer = (props) => {

    return (
        <Fragment>
            { props.posts.map(post => <Post key={post.slug} { ...post } />) }
        </Fragment>
    )
}

export { PostsContainer };
