import React from "react";
import styles from "./style";

const Search = props => {
    return (
        <aside className={styles.Search}>
            <form onSubmit={props.submit}>
                <div className={styles.Container}>
                    <input type="text" name={props.name} placeholder={props.placeholder} />
                </div>
                <button className={styles.Submit}>{props.submitText}</button>
            </form>
        </aside>
    )
}

export { Search };
