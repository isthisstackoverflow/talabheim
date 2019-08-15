import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.sass']
})
export class LogComponent {
  constructor(public storeService: StoreService) { }

  log(logInput: HTMLInputElement) {
    if (logInput.value) {
      this.storeService.log(logInput.value, 'Spielleiter (händisch)');
      logInput.value = '';
    }
  }

  date(p: number) {
    return new Date(p);
  }
}
