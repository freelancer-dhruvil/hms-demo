import { Component, effect, ElementRef, input, InputSignal, OnInit, output, OutputEmitterRef, viewChild } from '@angular/core';
import { TableListingService } from '../../../services/table-listing/table-listing.service';
import { Table, TablePageEvent } from 'primeng/table';
import { ColumnTypes } from '../../../constants/column-types.enum';
import { IColumn } from '../../../models/columns.interface';

@Component({
    selector: 'common-table',
    templateUrl: './common-table.component.html',
    styleUrl: './common-table.component.scss'
})
export class CommonTableComponent implements OnInit {

    public isLoading: InputSignal<boolean> = input<boolean>(true);
    public data: InputSignal<any[]> = input<any[]>([]);
    public cols: InputSignal<IColumn[]> = input<IColumn[]>([]);
    public isMini: InputSignal<boolean> = input<boolean>(false);
    public dataKey: InputSignal<string> = input<string>('');
    public searchQuery: InputSignal<string> = input<string>('');
    public selectionMethod: InputSignal<"single" | "multiple" | null | undefined> = input<"single" | "multiple" | null | undefined>();

    public commonTable = viewChild<Table>('commonTable');

    public selectedItemsChange: OutputEmitterRef<any[]> = output<any[]>();

    public readonly columnTypes = ColumnTypes;

    public first: number = 0;
    public rows: number = 10;
    public allSearchFields: string[] = [];

    public selectedItems: any[] = [];

    constructor(
        private readonly _listingService: TableListingService,
    ) {
        effect(() => {
            if(this.commonTable() && this.searchQuery()) {
                console.log(this.commonTable());
                this.commonTable()!.filterGlobal(this.searchQuery(), 'contains')
            }
        })
    }

    ngOnInit(): void {
        console.log(this.data(), this.cols()[0]);
        this._setSearchFields();
    }

    public bindingFunctionCall(functionName: string, header: any, row: any, event?: any): void {
        (this._listingService as any)[functionName](header, row, event);
    }

    public pageChange(event: TablePageEvent) {
        this.first = event.first;
        this.rows = event.rows;
    }

    public selectionChange(event: any): void {
        console.log(event);
        this.selectedItemsChange.emit(this.selectedItems);
    }

    private _setSearchFields(): void {
        let searchFields: Set<string> = new Set();

        this.cols().filter((val: IColumn) => val.isFilterable).forEach((val: IColumn) => {
            if (val.filterFieldsName && val.filterFieldsName.length > 0) {
                for (let i = 0; i < val.filterFieldsName.length; i++) {
                    searchFields.add(val.filterFieldsName[i]);
                }
            }
            searchFields.add(val.fieldName);
        });

        this.allSearchFields = [...searchFields];
    }
}
