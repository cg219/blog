import React, { Component } from "react";
import styles from "./style";
import { PostsContainer } from "./../../components/posts-container/component";
import { Search } from "./../../components/search/component";
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

    search = event => {
        event.preventDefault();
        console.log("SEARCH");
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (
            <div className={styles.Posts}>
                <Search name="term" placeholder="Search..." submitText="Search" submit={this.search} />
                <PostsContainer posts={this.state.posts} />
            </div>
        )
    }
}

export { PostsPage };
