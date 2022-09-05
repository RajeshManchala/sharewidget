import React from 'react';
import styles from './styles.module.css';

interface Props {
    text: string | undefined;
}

const SubTitle = ({text}: Props): JSX.Element => (
    <h2 className={styles.subtitle}>{text || ""}</h2>
)

export default SubTitle;