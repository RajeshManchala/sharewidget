import React from "react";
import styles from "./styles.module.css"
import SearchResultItem from "../search-result-item";
import { Result, ResultItem } from "../search-popup/result";

interface Props {
    searchResults: Result[];
    onSelectSearchResult: (item: ResultItem) => void;
}

const SearchResults = ({
    searchResults,
    onSelectSearchResult
}: Props): JSX.Element => {

    return (
        <div className={styles.searchResultsWrapper}>
            <div className={styles.searchResults}>
                {searchResults.map((item) => (
                    <dl key={item.key}>
                        <dt>{item.label}</dt>
                        {item.results.map((resultItem) => (
                            <SearchResultItem 
                                onClick={() => {
                                    onSelectSearchResult(resultItem)
                                }}
                                {...resultItem} 
                            />
                        ))}
                    </dl>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;