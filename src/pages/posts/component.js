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

    loadPosts = (isSearch, term) => {
        if (isSearch) {
            api.post('search', { term })
                .then(({ data }) => this.setState({ posts: data.posts }))

        } else {
            api.get('posts')
                .then(({ data }) => this.setState({ posts: data.posts }))
        }

    }

    search = (event, term) => {
        event.preventDefault();

        this.props.history.push(`/?term=${term}`);
    }

    getSearchTerm = () => {
        if (this.props.location.search) {
            const query = new URLSearchParams(this.props.location.search);

            return query.get('term');
        }

        return null;
    }

    componentDidMount() {
        const term = this.getSearchTerm();

        this.loadPosts(term !== null, term);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.search !== this.props.location.search && this.props.location.search) {
            const term = this.getSearchTerm();

            return this.loadPosts(term !== null, term);
        }

        if (prevProps.location.search !== this.props.location.search && !this.props.location.search) {
            return this.loadPosts();
        }
    }

    render() {
        return (
            <div className={styles.Posts}>
                <Search name="term" placeholder="Search..." submitText="Search" submit={(event, term) => this.search(event, term)} />
                <PostsContainer posts={this.state.posts} />
            </div>
        )
    }
}

export { PostsPage };
