import React, { useState } from 'react';
import DownSvg from '../../images/down.svg';
import { AccessItem } from './access-item';
import styles from "./styles.module.css";

const AccessList: AccessItem[] = [
    {
        label: "Full access",
        value: "FULL_ACCESS",
    },{
        label: "Can edit",
        value: "CAN_EDIT",
    },{
        label: "Can view",
        value: "CAN_VIEW",
    },{
        label: "No access",
        value: "NO_ACCESS",
    }
]

interface Props {
    selectedAccessItem: AccessItem;
    onSelectAccessItem: (item: AccessItem) => void;
}

const AccessButton = ({
    selectedAccessItem,
    onSelectAccessItem
}: Props): JSX.Element => {

    const [showPopup, setShowPopup] = useState<boolean>(false);

    const onClick = (): void => {
        setShowPopup(!showPopup);
    }

    const onSelect = (item: AccessItem): void => {
        onSelectAccessItem(item);
        onClick();
    }

    return (
        <div className={styles.accessWrapper}>
            <button onClick={onClick} className={styles.button}>
                <span>{selectedAccessItem?.label}</span>
                <img src={DownSvg} alt="No access" />
            </button>
            {showPopup && (
                <div className={styles.accessMenu}>
                    <ul>
                        {AccessList.map((item) => (
                            <li 
                                onClick={() => {
                                    onSelect(item)
                                }} 
                                key={item.value}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default AccessButton;