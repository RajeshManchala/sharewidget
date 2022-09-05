import React from "react";
import SubTitle from "../sub-title";
import LinkSvg from "../../images/link.svg";
import QuestionSvg from "../../images/question.svg";
import styles from "./styles.module.css";

interface Props {
    showLink: boolean;
}

const Learn = ({ showLink }: Props): JSX.Element => {
    
    const onClick = () => {}

    return (
        <div className={styles.learnSection}>
            <div className={styles.flex}>
                <img src={QuestionSvg} alt="Learn" />
                <SubTitle text="Learn about sharing" />
            </div>
            {showLink && (
                <button className={[styles.flex, styles.button].join(" ")} onClick={onClick}>
                    <img src={LinkSvg} alt="copy" />
                    <span>Copy link</span>
                </button>
            )}
        </div>
    )
}

export default Learn;