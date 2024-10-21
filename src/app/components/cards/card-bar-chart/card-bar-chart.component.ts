import { Component, effect, input, Input, InputSignal, OnInit, output, OutputEmitterRef } from '@angular/core';
import { ChartModel } from '../../../models/chart.model';
import { AppColors } from '../../../constants/colors.enum';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'card-bar-chart',
    templateUrl: './card-bar-chart.component.html'
})
export class CardBarChartComponent implements OnInit {

    public chart: InputSignal<ChartModel | undefined> = input<ChartModel>();

    public viewChangeRequest:OutputEmitterRef<"week" | "month" | "year"> = output<"week" | "month" | "year">();


    public data: any;
    public options: any;

    public allViews: MenuItem[] = [
        {
            label: 'Last 8 Days',
            id: 'week',
            isActive: true,
            command: () => {
                this.viewChange('week', 0);
            }
        },
        {
            label: 'Last Month',
            id: 'month',
            isActive: false,
            command: () => {
                this.viewChange('month', 1);
            }
        },
        {
            label: 'Last Year',
            id: 'year',
            isActive: false,
            command: () => {
                this.viewChange('year', 2);
            }
        },
    ];

    public currentViewIndex: number = 0;

    constructor() {
        effect(() => {
            if (this.chart()) {
                this._prepareChartData(this.chart());
            }
        });
    }

    ngOnInit() {
    }

    public viewChange(id: "week" | "month" | "year", index: number): void {
        
        if (this.currentViewIndex === index) return;

        this.currentViewIndex = index;        
        this.viewChangeRequest.emit(id);
    }

    private _prepareChartData(rawData: any): void {
        console.log(rawData);
        const labels = rawData.data[0].records.map((r: any) => new Date(r.date).toLocaleDateString());
        const datasets = rawData.data.map((group: any) => ({
            label: group.name,
            data: group.records.map((r: any) => r.value),
            backgroundColor: group.name === "Child" ? AppColors.THEME_PRIMARY : group.name === "Adult" ? AppColors.THEME_SECONDARY : AppColors.THEME_TERTIARY,
            borderWidth: 0,
            borderRadius: Number.MAX_VALUE,
        }));
        console.log(datasets);


        this.data = {
            labels: labels,
            datasets: datasets
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    position: 'top',
                    align: 'start',
                    labels: {
                        padding: 40,
                        usePointStyle: true,
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: 'black'
                    },
                    grid: {
                        lineWidth: 0,
                    },
                },
                y: {
                    ticks: {
                        color: 'black',
                        beginAtZero: true
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
            }
        };
    }
}

