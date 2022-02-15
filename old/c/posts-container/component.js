import React, { Fragment } from "react";
import styles from "./style";
import { Post } from "./../post/component";
import { Loading } from "./../loading/component";

const PostsContainer = (props) => {

    let content = (props.posts.length > 0) ? props.posts.map(post => <Post key={post.slug} { ...post } />) : <Loading />

    return (
        <Fragment>
            { content }
        </Fragment>
    )
}

export { PostsContainer };
