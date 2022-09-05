import React from 'react';
import styles from './styles.module.css';

interface Props {
    text: string;
}

const Title = ({ text }: Props): JSX.Element => (
    <h1 className={styles.title}>{text}</h1>
)

export default Title;