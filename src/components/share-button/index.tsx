import React, { useState } from "react";
import ShareSvg from "../../images/share.svg";
import SharePopup from "../share-popup";
import styles from "./styles.module.css";

const ShareButton = (): JSX.Element => {

    const [showPopup, setShowPopup] = useState<boolean>(false)

    const onClick = (): void => {
        setShowPopup(true);
    }

    return (
        <>
            <button className={styles.button} onClick={onClick}>
                Share
                <img src={ShareSvg} alt="Share" />
            </button>
            {showPopup && (
                <SharePopup />
            )}
        </>
    );
}

export default ShareButton;