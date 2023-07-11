import styles from "./NewButton.module.css";
import clsx from "classnames";
const NewButton = (props) => {
    const { onClick = () => null, isOutlined = false, isActive = false, children } = props;
    const button = clsx(styles.button, {
        [styles.outlined]: isOutlined,
        [styles.outlinedActive]: isActive,
    });
    return (
        <button className={button} onClick={onClick}>
            {children}
        </button>
    );
};

export default NewButton;
