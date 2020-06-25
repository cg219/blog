import React, { Component, Fragment } from "react";
import styles from "./style";
import { PortfolioItem } from "./../../components/portfolio-item/component";
import axios from "axios";
import ReactGA from "react-ga";

const api = axios.create({ baseURL: 'http://localhost:3000/api/' });

export class PortfolioPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        console.log("HO")
        api.get('portfolio')
            .then(({ data }) => this.setState({ items: data.items }));
    }

    render() {
        return (
            <section className={styles.Portfolio}>
                { this.state.items.length > 0 ? this.state.items.map(item => <PortfolioItem key={item.name} { ...item } />) : null }
            </section>
        )
    }
}
