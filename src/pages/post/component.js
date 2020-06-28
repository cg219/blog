import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { Loading } from "./../../components/loading/component";
import styles from "./style";
import axios from "axios";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

const api = axios.create({ baseURL: process.env.API_URL });

export class PostPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null
        }
    }

    loadPost = slug => {
        api
            .get(`post/${slug}`)
            .then(({ data }) => this.setState({ post: data.post }))
    }

    componentDidMount() {
        if (this.props.match.params.slug) {
            this.loadPost(this.props.match.params.slug);
            ReactGA.pageview(this.props.location.pathname);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.slug !== prevProps.match.params.slug) {
            this.loadPost(this.props.match.params.slug);
            ReactGA.pageview(this.props.location.pathname);
        }
    }

    render() {
        const defaultFeature = "https://storage.googleapis.com/kreativemente-assets/uploads/default2.jpg";
        let markup = <Loading />;

        if (this.state.post) {
            const feature = this.state.post.feature_image || defaultFeature;
            const category = this.state.post.primary_tag ? <span className={styles.Category}>{this.state.post.primary_tag.name}</span> : null;
            let tags = null;
            let related = null;

            if (this.state.post.tags) {
                tags = (
                    <div className={styles.Tags}>
                        <ul>
                            {this.state.post.tags.map(tag => <li key={tag.slug} className={styles.Tag}><Link to={`/tags/${tag.slug}`}>{tag.name}</Link></li>)}
                        </ul>
                    </div>
                )
            }

            if (this.state.post.related) {
                related = this.state.post.related.map((post, index) => (
                    <div className={styles.RelatedPost} key={post.slug} style={{gridArea: `related-${index + 1}`}}>
                        <div className={styles.RelatedImage} style={{ backgroundImage: `url(${post.feature_image || defaultFeature })`}}></div>
                        <h3 className={styles.RelatedTitle}>{post.title}</h3>
                        <Link to={`/read/${post.slug}?related_from=${this.state.post.slug}&internal=true`}></Link>
                    </div>
                ))
            }

            markup = (
                <Fragment>
                    <Helmet>
                        <title>imkreative - {this.state.post.title}</title>
                        <meta property="og:url" content={this.props.mainurl + this.props.location.pathname} />
                        <meta property="og:type" content="article" />
                        <meta property="og:title" content={this.state.post.title} />
                        <meta property="og:description" content={this.state.post.excerpt} />
                        <meta property="og:image" content={this.state.post.feature_image || defaultFeature} />
                    </Helmet>
                    <div className={styles.Post}>
                        <header className={styles.Header}>
                            <div className={styles.ImageContainer}>
                                <div className={styles.Image} style={{backgroundImage: `url(${feature})`}}></div>
                            </div>
                            <div className={styles.Info}>
                                <span className={styles.Date}>{this.state.post.formatted_date}</span>
                                <h1 className={styles.Title}>{this.state.post.title}</h1>
                                { category }
                                <div className={styles.Author}>
                                    <div className={styles.AuthorImage} style={{ backgroundImage: `url(${this.state.post.primary_author.profile_image})` }}></div>
                                    <span className={styles.AuthorName}>by {this.state.post.primary_author.name}</span>
                                </div>
                            </div>
                        </header>
                        <section className={styles.Body}>
                            { tags }
                            <div dangerouslySetInnerHTML={{__html: this.state.post.html}}></div>
                        </section>
                        <aside className={styles.Sidebar}>
                            <section className={styles.Owner}>
                                <div className={styles.OwnerImage} style={{ backgroundImage: `url(${this.props.owner.profile_image})`}}></div>
                                <h2 className={styles.OwnerTitle}>Hi I&rsquo;m {this.props.owner.name}</h2>
                                <p className={styles.OwnerBio}>{this.props.owner.bio}</p>
                            </section>
                            <section className={styles.RelatedPosts}>
                                { related }
                            </section>
                        </aside>
                        <footer className={styles.Footer}>
                            <h3>Share this Post</h3>
                            <ul>
                                <li className={styles.Twitter}><a href={`https://twitter.com/intent/tweet?text=${this.state.post.title}&url=${this.props.owner.website}/read/${this.state.post.slug}&hashtags=imkreative&via=kreativemente`} target="_blank"></a></li>
                                <li className={styles.Facebook}><a href={`https://www.facebook.com/sharer/sharer.php?u=${this.props.owner.website}/read/${this.state.post.slug}`} target="_blank"></a></li>
                                <li className={styles.LinkedIn}><a href={`https://www.linkedin.com/shareArticle?mini=true&url=${this.props.owner.website}/read/${this.state.post.slug}&title=${this.state.post.title}`} target="_blank"></a></li>
                            </ul>
                        </footer>
                    </div>
                </Fragment>
            )
        }

        return markup
    }
}

export const PostPageWithRouter = withRouter(PostPage);
