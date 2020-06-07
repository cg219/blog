import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Posts } from "./pages/posts/component";
import { Post } from "./pages/post/component";
import { Header } from "./components/header/component";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nav: null,
            title: 'imkreative'
        }
    }

    render() {
        return (
            <Fragment>
                <Header />
                <Switch>
                    <Route path="/read/:slug" component={Post} />
                    <Route path="/" component={Post} />
                </Switch>
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

