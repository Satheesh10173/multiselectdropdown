export interface ISelectSettings {
    isSearch?: boolean,
    placeholder?: string,
    isSelectAll?: boolean,
    isShowImage?: boolean,
    limit?: number,
    isLimit?: boolean,
    singleSelect: boolean
    
}

export interface IListItem {
    id: number,
    name: string,
    image?: string,
    checked: boolean
}