import React, { Component, Fragment } from "react";
import styles from "./style";

const PortfolioItem = props => {
    let link = props.active ? <a href={props.url} target="_blank"></a> : null;
    let imgs = [["280", "280"], ["300", "300"], ["400", "400"], ["600", "480"]];

    return (
        <div className={styles.PortfolioItem}>
            { link }
            <div className={styles.Info}>
                <h2 className={styles.Title}>{ props.name }</h2>
                <span className={styles.Date}>{ props.formatted_date }</span>
                <span className={styles.Client}>Client: { props.client }</span>
                <span className={styles.Agency}>Agency: { props.agency }</span>
                <span className={styles.Role}>Role: { props.role.join(', ') }</span>
                <span className={styles.Tech}>Technology Used: { props.technology.join(', ') }</span>
            </div>
            <img
                srcSet={imgs.map(size => `${props.thumbnail.url}?w=${size[0]}&h=${size[0]}&fit=thumb&fm=jpg&q=85 ${size[1]}w,`)}
                src={`${props.thumbnail.url}?w=400&h=400&fit=thumb&fm=jpg&q=85`}
                alt={props.thumbnail.filename}
            />
        </div>
    )
}

export { PortfolioItem };
