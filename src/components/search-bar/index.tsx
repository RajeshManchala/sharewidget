import React from 'react';
import AccessButton from '../access-button';
import { AccessItem } from '../access-button/access-item';
import Pill from '../pill';
import { ResultItem } from '../search-popup/result';

import styles from './styles.module.css';


interface Props {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchKey: string;
    onKeyUp: (event:React.KeyboardEvent<HTMLInputElement>) => void;
    selectItems: ResultItem[];
    onRemove: (index: number) => void;
    selectedAccessItem: AccessItem;
    onSelectAccessItem: (item: AccessItem) => void;
    onInvite: () => void;
}

const SearchBar = ({
    onChange,
    searchKey,
    onKeyUp,
    selectItems,
    onRemove,
    selectedAccessItem,
    onSelectAccessItem,
    onInvite
}: Props): JSX.Element => {

    return (
        <div className={styles.searchBarWrapper}>
            <div className={styles.searchBar}>
                {selectItems.length === 0 && (
                    <input 
                        onChange={onChange}
                        type="search"
                        placeholder="Search emails, names or groups"
                        value={searchKey}
                        onKeyUp={onKeyUp}
                    />
                )}
                {selectItems.map((item, index) => (
                    <Pill text={item.name} onClick={() => onRemove(index)} />
                ))}
                <div className={styles.buttonsSection}>
                    <AccessButton selectedAccessItem={selectedAccessItem} onSelectAccessItem={onSelectAccessItem} />
                    <button onClick={onInvite} className={styles.inviteButton}>Invite</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;