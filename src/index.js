import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { PostsPage } from "./pages/posts/component";
import { PostPage } from "./pages/post/component";
import { Header } from "./components/header/component";
import { Footer } from "./components/footer/component";
import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:3000/api/' });

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nav: null,
            title: 'imkreative',
            logo: null,
            config: null
        }
    }

    loadConfig = () => {
        api
            .get('settings')
            .then(({ data }) => this.setState({ config: data }))
            .catch(error => console.error(error));
    }

    componentDidMount() {
        this.loadConfig();
    }

    render() {
        const logo = this.state.config ? this.state.config.logo : null;
        const twitter = this.state.config ? this.state.config.twitter : null;
        const facebook = this.state.config ? this.state.config.facebook : null;

        return (
            <Fragment>
                <Header logo={logo} />
                <Switch>
                    <Route path="/read/:slug" component={PostPage} />
                    <Route path="/" component={PostsPage} />
                </Switch>
                <Footer twitter={twitter} facebook={facebook} />
            </Fragment>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('blog')
);

