import React from 'react';
import SubTitle from '../sub-title';
import Title from '../title';
import AccessButton from '../access-button';

import styles from './styles.module.css';
import { AccessItem } from '../access-button/access-item';
import { ResultItem } from '../search-popup/result';

interface Props {
    inviteList: ResultItem[];
    updateInviteList: (inviteList: ResultItem[]) => void;
}

const ShareToOslash = ({ inviteList, updateInviteList }: Props): JSX.Element => {

    const onSelectAccessItem = (item: AccessItem, i: number): void => {
        const newList = [...inviteList];
        newList[i].accessType = item;
        updateInviteList(newList);
    }

    return (
        <div className={styles.shareToWebWrapper}>
            {inviteList.map((item, i) => (
                <div key={item.name} className={styles.shareToWeb}>
                    <div className={styles.header}>
                        <img src={item.image} alt="web" />
                        <div className={styles.titleWrapper}>
                            <Title text={item.name} />
                            <SubTitle text={item.subtitle || item.email} />
                        </div>
                    </div>
                    <AccessButton
                        selectedAccessItem={item.accessType}
                        onSelectAccessItem={(item) => {
                            onSelectAccessItem(item, i);
                        }}
                    />
                </div>
            ))}
        </div>
    )
}

export default ShareToOslash;