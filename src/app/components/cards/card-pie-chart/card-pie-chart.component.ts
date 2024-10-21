import { Component, effect, input, Input, InputSignal, OnInit, output, OutputEmitterRef } from '@angular/core';
import { ChartModel } from '../../../models/chart.model';
import { MenuItem } from 'primeng/api';
import { AppColors } from '../../../constants/colors.enum';

@Component({
    selector: 'card-pie-chart',
    templateUrl: './card-pie-chart.component.html'
})
export class CardPieChartComponent implements OnInit {
    public chart: InputSignal<ChartModel | undefined> = input<ChartModel>();

    public viewChangeRequest: OutputEmitterRef<"week" | "month" | "year"> = output<"week" | "month" | "year">();


    public data: any;
    public options: any;
    public currentViewIndex: number = 0;
    public total: number = 0;

    public allViews: MenuItem[] = [
        {
            label: 'Week',
            id: 'week',
            isActive: true,
            command: () => {
                this.viewChange('week', 0);
            }
        },
        {
            label: 'Month',
            id: 'month',
            isActive: false,
            command: () => {
                this.viewChange('month', 1);
            }
        },
        {
            label: 'Year',
            id: 'year',
            isActive: false,
            command: () => {
                this.viewChange('year', 2);
            }
        },
    ];


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
       
        const labels = rawData.data.map((department: any) => department.name);

       
        const data = rawData.data.map((department: any) => {
            return department.records.reduce((sum: number, record: any) => sum + record.value, 0);
        });

       
        const backgroundColors = [
            AppColors.THEME_PRIMARY,
            AppColors.THEME_SECONDARY,
            AppColors.THEME_TERTIARY,
            AppColors.THEME_QUATERNARY
        ];

       
        const colors = backgroundColors.slice(0, labels.length);
        this.total = data.reduce((sum: any, value: any) => sum + value, 0);

       
        this.data = {
            labels: labels,
            datasets: [
                {
                    label: 'Patient Records by Department',
                    data: data,
                    backgroundColor: colors,
                    borderColor: colors.map(color => this._darkenColor(color, 20)),
                    borderWidth: 0
                }
            ]
        };

       
        this.options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
            },
            tooltip: {
                callbacks: {
                    label: (context: any) => {
                        let label = context.label || '';
                        let value = context.raw;
                        return `${label}: ${value} records`;
                    }
                }
            },
            cutout: '60%'
        };
    }

   
    private _darkenColor(color: string, percentage: number): string {
        let colorHex = color.startsWith('#') ? color.slice(1) : color;
        let r = parseInt(colorHex.slice(0, 2), 16);
        let g = parseInt(colorHex.slice(2, 4), 16);
        let b = parseInt(colorHex.slice(4, 6), 16);

        r = Math.max(0, Math.min(255, r - (r * (percentage / 100))));
        g = Math.max(0, Math.min(255, g - (g * (percentage / 100))));
        b = Math.max(0, Math.min(255, b - (b * (percentage / 100))));

        return `#${this._componentToHex(r)}${this._componentToHex(g)}${this._componentToHex(b)}`;
    }

    private _componentToHex(c: number): string {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }
}

