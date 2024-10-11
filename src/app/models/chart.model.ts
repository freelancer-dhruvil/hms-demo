export class ChartModel {
    title: string;                            // Title of the chart
    description: string;                      // Description of chart
    type: 'bar' | 'line' | 'pie';            // Type of chart
    duration: 'week' | 'month' | 'year';     // Duration of data
    data: ChartDataModel[];                   // Array of ChartDataModel

    constructor(
        title: string,
        description: string,
        type: 'bar' | 'line' | 'pie',
        duration: 'week' | 'month' | 'year',
        data: ChartDataModel[]
    ) {
        this.title = title;
        this.description = description;
        this.type = type;
        this.duration = duration;
        this.data = data;
    }
}

export class ChartDataModel {
    name: string;                             // Name of the data series
    records: ChartRecordModel[];              // Array of ChartRecordModel

    constructor(name: string, records: ChartRecordModel[]) {
        this.name = name;
        this.records = records;
    }
}

export class ChartRecordModel {
    date: Date;         // Date for which the value is recorded
    value: number;      // Record value for specific date

    constructor(date: Date, value: number) {
        this.date = date;
        this.value = value;
    }
}


