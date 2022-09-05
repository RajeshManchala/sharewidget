import React, { useState } from "react";
import styles from "./styles.module.css";

interface Props {
    checked?: boolean;
}

const SwitchComponent = ({checked = false}: Props): JSX.Element => {
    const [isToggled, setIsToggled] = useState<boolean>(checked);
  
    const onToggle = (): void => {
        setIsToggled(!isToggled);
    }
  
    return (
        <label className={styles.switchWrapper}>
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className={styles.switch} />
        </label>
    );
}

export default SwitchComponent;