import { AccessItem } from "../access-button/access-item";

export interface ResultItem {
    image?: string;
    subtitle?: string;
    email?: string;
    name: string;
    accessType: AccessItem;
}

export interface Result {
    key: string;
    label: string;
    results: Array<ResultItem>
}