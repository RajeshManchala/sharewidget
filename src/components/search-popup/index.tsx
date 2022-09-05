import React, { useState } from 'react';
import Learn from '../learn';
import SearchBar from '../search-bar';
import SearchResults from '../search-results';

import ArleneMccoySvg from "../../images/arlene-mccoy.svg"
import WadeCooperSvg from "../../images/wade-cooper.svg"

import styles from './styles.module.css';
import { Result, ResultItem } from './result';
import { AccessItem } from '../access-button/access-item';

const sanitizeString = (str: string): string => {
    return str.replace(/' '/g, '').toLowerCase();
}

const defaultAccessItem = {
    label: "No access",
    value: "NO_ACCESS",
}

const data: Result[] = [
    {
        key: "people",
        label: "Select a person",
        results: [
            {
                image: WadeCooperSvg,
                name: "Wade Cooper",
                email: "wadecooper@gmail.com",
                accessType: defaultAccessItem
            },
            {
                image: ArleneMccoySvg,
                name: "Arlene Mccoy",
                email: "arlene@gmail.com",
                accessType: defaultAccessItem
            }
        ]
    },{
        key: "groups",
        label: "Select a group",
        results: [
            {
                name: "Product",
                email: "product@gmail.com",
                accessType: defaultAccessItem
            },
            {
                name: "Engeneering",
                email: "engeneer@gmail.com",
                accessType: defaultAccessItem
            }
        ]
    }
];

interface Props {
    onInviteCallback: (items: ResultItem[]) => void;
}

const SearchPopup = ({ onInviteCallback }: Props): JSX.Element => {

    const [searchKey, setSearchKey] = useState<string>("");
    const [searchResults, setSearchResults] = useState<Result[]>(data);
    const [selectItems, setSelectItems] = useState<ResultItem[]>([]);
    const [selectedAccessItem, setSelectedAccessItem] = useState<AccessItem>({
        label: "No access",
        value: "NO_ACCESS",
    });


    const fetchResults = (key: string): void => {
        const results: Result[] = [];
        data.forEach((item) => {
            const resultItems = item.results.filter((it) => sanitizeString(it.name).includes(sanitizeString(key)));
            if (resultItems.length > 0) {
                results.push({
                    key: item.key,
                    label: item.label,
                    results: resultItems
                })
            }
        })
        setSearchResults(results);
    }

    const onSearchKeyChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { target: { value } } = event;
        setSearchKey(value);
        fetchResults(value);
    }

    const onSearchKeyUp = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        const { keyCode } = event;
        if (keyCode === 13 && searchResults.length>0) {
            setSelectItems([searchResults[0].results[0]]);
        }
    }

    const onRemove = (index: number): void => {
        setSelectItems(selectItems.slice(index+1));
    }

    const onSelectAccessItem = (item: AccessItem): void => {
        setSelectedAccessItem(item);
    }

    const onSelectSearchResult = (item: ResultItem): void => {
        setSelectItems([item]);
    }

    const onInvite = () => {
        const newSelectItems = [...selectItems];
        newSelectItems[0].accessType = selectedAccessItem;
        onInviteCallback(newSelectItems);
    }

    return (
        <div className={styles.searchPopup}>
            <SearchBar 
                onChange={onSearchKeyChange}
                onKeyUp={onSearchKeyUp}
                searchKey={searchKey}
                selectItems={selectItems}
                onRemove={onRemove}
                selectedAccessItem={selectedAccessItem}
                onSelectAccessItem={onSelectAccessItem}
                onInvite={onInvite}
            />
            <SearchResults 
                searchResults={searchResults}
                onSelectSearchResult={onSelectSearchResult}
            />
            <Learn showLink={false} />
        </div>
    );
}

export default SearchPopup;