import React, { Component, Fragment } from "react";
import styles from "./style";
import { PostsContainer } from "./../../components/posts-container/component";
import { Search } from "./../../components/search/component";
import axios from "axios";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

const api = axios.create({ baseURL: process.env.API_URL });

class PostsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    loadPosts = (options) => {
        if (options && options.search) {
            api.post('search', { term: options.term, params: { key: process.env.API_KEY, include: 'tags,authors' } })
                .then(({ data }) => this.setState({ posts: data.posts }))

        } else if (options && options.tagged) {
            api.get(`tagged/${options.tag}`, { params: { key: process.env.API_KEY, include: 'tags,authors' }})
                .then(({ data }) => this.setState({ posts: data.posts }))
        } else {
            api.get('posts', { params: { key: process.env.API_KEY, include: 'tags,authors' }})
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
        const options = {};

        if (term) {
            options.search = true;
            options.term = term;
        } else if (this.props.match.path === "/tags/:tag") {
            options.tagged = true;
            options.tag = this.props.match.params.tag;
        }

        this.loadPosts(options);
        ReactGA.pageview(this.props.location.pathname);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.path !== '/tags/:tag') {
            if (prevProps.location.search !== this.props.location.search && this.props.location.search) {
                const term = this.getSearchTerm();

                return this.loadPosts({ term, search: true });
            }

            if ( (prevProps.location.search !== this.props.location.search && !this.props.location.search ) ||
                (prevProps.location.pathname !== this.props.location.pathname)) {
                return this.loadPosts();
            }

            ReactGA.pageview(this.props.location.pathname);
        }
    }

    render() {
        const classes = this.props.match.path === '/tags/:tag' ? [styles.Posts, styles.Tags].join(' ') : styles.Posts;
        const topSection = this.props.match.path !== '/tags/:tag' ? <Search name="term" placeholder="Search..." submitText="Search" submit={(event, term) => this.search(event, term)} /> : <h2 className={styles.TagsTitle}>Posts tagged with <span>{this.props.match.params.tag}</span></h2>

        return (
            <Fragment>
                <Helmet>
                    <title>imkreative - Blog</title>
                </Helmet>
                <div className={classes}>
                    { topSection }
                    <PostsContainer posts={this.state.posts} />
                </div>
            </Fragment>
        )
    }
}

export { PostsPage };
