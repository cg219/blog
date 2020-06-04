import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Posts } from "./pages/posts/component";
import { Post } from "./pages/post/component";
import { Header } from "./components/header/component";

const App = () => (
    <Fragment>
        <div>My App</div>
        <Header />
        <Switch>
            <Route path="/read/:slug" component={Post} />
            <Route path="/" component={Post} />
        </Switch>
    </Fragment>
)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('blog')
);

