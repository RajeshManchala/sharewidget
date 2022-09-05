import React, { useState } from "react";
import SearchPopup from "../search-popup";
import ReactModal from "react-modal";
import styles from "./styles.module.css";
import { ResultItem } from "../search-popup/result";

interface Props {
    onInviteCallback: (items: ResultItem[]) => void;
}

const Search = ({ onInviteCallback }: Props): JSX.Element => {

    const [showPopup, setShowPopup] = useState<boolean>(false);

    const onFocus = (): void => {
        setShowPopup(true);
    }

    const onClose = (): void => {
        setShowPopup(false);
    }

    const onInvite = (items: ResultItem[]): void => {
        setShowPopup(false);
        onInviteCallback(items);
    }

    return (
        <>
            <div className={styles.search}>
                <input onFocus={onFocus} type="search" placeholder="People, emails, groups" />
                <button>Invite</button>
            </div>
            {showPopup && (
                <ReactModal 
                    isOpen={showPopup}
                    shouldCloseOnOverlayClick 
                    onRequestClose={onClose}
                    className={styles.searchPopup}
                >
                    <SearchPopup onInviteCallback={onInvite}/>
                </ReactModal>
            )}
        </>
    )
}

export default Search;