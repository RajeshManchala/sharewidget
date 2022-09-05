import React, { useState } from 'react';
import Learn from '../learn';
import Search from '../search';
import { ResultItem } from '../search-popup/result';
import ShareToOslash from '../share-to-oslash';
import ShareToWeb from '../share-to-web';
import styles from './styles.module.css';
import OslashSvg from '../../images/oslash.svg';

const SharePopup = (): JSX.Element => {
    const [inviteList, setInviteList] = useState<ResultItem[]>([
        {
            name: 'Every one at OSlash',
            subtitle: "25 workspace members",
            image: OslashSvg,
            accessType: {
                label: "No access",
                value: "NO_ACCESS",
            }
        }
    ]);
    
    const onInviteCallback = (items: ResultItem[]): void => {
        setInviteList([
            ...inviteList,
            ...items
        ])
    }

    const updateInviteList = (items: ResultItem[]): void => {
        setInviteList(items)
    }
    
    return (
        <div className={styles.sharePopup}>
            <ShareToWeb />
            <div className={styles.shareToOslashWrapper}>
                <Search onInviteCallback={onInviteCallback} />
                <ShareToOslash inviteList={inviteList} updateInviteList={updateInviteList}/>
            </div>
            <Learn showLink />
        </div>
    );
}

export default SharePopup;