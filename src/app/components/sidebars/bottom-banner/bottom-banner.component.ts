import { Component, output } from '@angular/core';

@Component({
    selector: 'admin-bottom-banner',
    templateUrl: './bottom-banner.component.html',
    styleUrl: './bottom-banner.component.scss'
})
export class BottomBannerComponent {
    public bottomBannerVisible = output<boolean>();

    public closeBanner(): void {
        this.bottomBannerVisible.emit(false);
    }
}
