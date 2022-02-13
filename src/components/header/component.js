import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.scss";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nav : [{
                name: 'Blog',
                route: '/'
            }]
        }
    }

    render() {
        const logoImageStyle = {
            backgroundImage: `url(${this.props.logo})`
        };

        return (
            <header className={styles.Header}>
                <nav>
                    <ul>
                        { this.state.nav.map(link => <li key={link.name}><NavLink to={link.route}>{link.name}</NavLink></li>)}
                    </ul>
                </nav>
                <figure>
                    <div className={styles.Logo} style={logoImageStyle}></div>
                </figure>
            </header>
        )
    }
}


export { Header };
