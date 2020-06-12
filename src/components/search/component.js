import React, { useState } from "react";
import styles from "./style";

const Search = props => {
    const [term, setTerm] = useState('');
    const onInputChange = (event) => {
        setTerm(event.target.value);
    }

    return (
        <aside className={styles.Search}>
            <form onSubmit={(event) => props.submit(event, term)}>
                <div className={styles.Container}>
                    <input type="text" name={props.name} placeholder={props.placeholder} onChange={onInputChange} />
                </div>
                <button className={styles.Submit}>{props.submitText}</button>
            </form>
        </aside>
    )
}

export { Search };
