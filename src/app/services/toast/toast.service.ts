import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

    constructor(private messageService: MessageService) {}

    showSuccess(title: string, message?: string) {
        this.messageService.add({ severity: 'success', summary: title, detail: message });
    }

    showInfo(title: string, message?: string) {
        this.messageService.add({ severity: 'info', summary: title, detail: message });
    }

    showWarn(title: string, message?: string) {
        this.messageService.add({ severity: 'warn', summary: title, detail: message });
    }

    showError(title: string, message?: string) {
        this.messageService.add({ severity: 'error', summary: title, detail: message });
    }

    showContrast(title: string, message?: string) {
        this.messageService.add({ severity: 'contrast', summary: title, detail: message });
    }

}
