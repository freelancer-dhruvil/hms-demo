export class CardStatsModel {
    title: string;                   // Title of stats
    description?: string;            // Description of Stats
    icon?: string;                   // Class name for icon
    value: number;                   // Current Value
    compareValue: number;            // Value to compare with current value
    change?: number;                 // Change in value
    changePercent?: number;          // Change in percentage

    constructor(
        title: string,
        value: number,
        compareValue: number,
        description?: string,
        icon?: string,
        change?: number,
        changePercent?: number
    ) {
        this.title = title;
        this.value = value;
        this.compareValue = compareValue;
        this.description = description;
        this.icon = icon;
        this.change = change;
        this.changePercent = changePercent;
    }
}
