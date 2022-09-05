import React from 'react';
import styles from './styles.module.css';

interface Props {
    image?: string;
    name: string;
    onClick: () => void;
}

const SearchResultItem = ({image, name, onClick}: Props): JSX.Element => {

    return (
        <div onClick={onClick} className={styles.searchResultItem}>
            {image ? (
                <img src={image} alt={name} />
            ) : (
                <span className={styles.icon}>{name.charAt(0)}</span>
            )}
            <span className={styles.name}>{name}</span>
        </div>
    )
}

export default SearchResultItem;