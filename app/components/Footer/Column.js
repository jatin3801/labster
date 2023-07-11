import React from "react";
import styles from "./column.module.css";

const Column = (props) => {
    const { heading = "", linkArray = [] } = props;
    return (
        <div className={styles.container}>
            <h3 div className={styles.heading}>
                {heading}
            </h3>

            {linkArray.map((item) => (
                <p div key={item.id} className={styles.single_item}>
                    {item.label}
                </p>
            ))}
        </div>
    );
};

export default Column;
