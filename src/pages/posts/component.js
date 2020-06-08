import React, { Component } from "react";
import styles from "./style";
import { PostsContainer } from "./../../components/posts-container/component";
import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:3000/api/' });

class PostsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    loadPosts = () => {
        api
            .get('posts')
            .then(({ data }) => this.setState({ posts: data.posts }))
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (
            <div className={styles.Posts}>
                <PostsContainer posts={this.state.posts}></PostsContainer>
            </div>
        )
    }
}

export { PostsPage };
