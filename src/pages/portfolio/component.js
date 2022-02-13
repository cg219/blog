import React, { Component, Fragment } from "react";
import styles from "./style";
import { PortfolioItem } from "./../../components/portfolio-item/component";
import axios from "axios";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";

const api = axios.create({ baseURL: process.env.API_URL });

export class PortfolioPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname);
        api.get('portfolio', { params: { key: process.env.API_KEY }})
            .then(({ data }) => this.setState({ items: data.items }));
    }

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>imkreative - Portfolio</title>
                </Helmet>
                <section className={styles.Portfolio}>
                    { this.state.items.length > 0 ? this.state.items.map(item => <PortfolioItem key={item.name} { ...item } />) : null }
                </section>
            </Fragment>
        )
    }
}
