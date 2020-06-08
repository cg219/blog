import React, { Component } from "react";
import styles from "./style";

class PostPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.Post}>
                <h1>Post</h1>
            </div>
        )
    }
}

export { PostPage };
