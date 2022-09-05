import React from 'react';
import styles from './styles.module.css';
import CrossSvg from '../../images/cross.svg';

interface Props {
    text: string;
    onClick: () => void;
}

const Pill = ({ text, onClick }: Props): JSX.Element => {
    return (
        <div className={styles.pill}>
            <span>{text}</span>
            <img onClick={onClick} src={CrossSvg} alt="Close" />
        </div>
    );
}

export default Pill;