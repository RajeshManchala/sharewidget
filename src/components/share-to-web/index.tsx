import React from 'react';
import SubTitle from '../sub-title';
import Title from '../title';

import WebSvg from '../../images/web.svg';

import styles from './styles.module.css';
import Switch from '../switch-component';

const ShareToWeb = (): JSX.Element => {

    return (
        <div className={[styles.shareToWeb, styles.flex].join(' ')}>
            <div className={[styles.header, styles.flex].join(' ')}>
                <img src={WebSvg} alt="web" />
                <div className={[styles.titleWrapper, styles.flex].join(' ')}>
                    <Title text="Share to Web" />
                    <SubTitle text="Publish and share link with anyone" />
                </div>
            </div>
            <Switch />
        </div>
    )
}

export default ShareToWeb;