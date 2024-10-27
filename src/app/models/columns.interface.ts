export interface IColumn {
    fieldName: string;
    columnHeader: string;
    isColumnVisible: boolean;
    fieldType?: string;
    sortFieldName?: string;
    customSortingFunction?: Function;
    filterFieldsName?: string[];
    customFilterFunction?: Function;
    cellClickFunction?: Function;
    cellHoverFunction?: Function;
    cellDubleClickFunction?: Function;
    cellContextMenuFunction?: Function;
    isSortable?: boolean;
    isFilterable?: boolean;
    isDisabled?: boolean;
    isTooltipVisible?: boolean;
    tooltipFieldName?: string;
    isInlineEditAllowed?: boolean;
    colType?: string;
    customColumnTemplate?: any;
    cellInlineChangeFunction?: string;
    servityFieldName?: string;
    [key: string]: any;
}
