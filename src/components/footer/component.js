import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.scss";

const Footer = (props) => {
    let socials = [];

    if (props.twitter) {
        socials.push(<li key="twitter" className={styles.Twitter}><a href={`https://www.twitter.com/${props.twitter.slice(1, 1).toUpperCase()}${props.twitter.slice(2).toLowerCase()}`} target="_blank">{props.twitter}</a></li>);
    }

    if (props.facebook) {
        socials.push(<li key="facebook" className={styles.Facebook}><a href={`https://www.facebook.com/${props.facebook}`} target="_blank">{props.facebook}</a></li>);
    }

    return (
        <footer className={styles.Footer}>
            <ul className={styles.Social}>
                <li className={styles.Link}><a href="https://ko-fi.com/imkreative">Support Me</a></li>
                <li className={styles.Link}><a href="mailto:dev[at]imkreative[dot]com">Email Me</a></li>
                { socials }
                <li className={styles.Ghost}><a href="https://ghost.org/" target="_blank">Powered by Ghost</a></li>
                <li className={styles.Google}><a href="https://cloud.google.com/" target="_blank">Hosted by Google Cloud</a></li>
            </ul>
        </footer>
    )
}

export { Footer };
