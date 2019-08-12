import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.sass']
})
export class OverviewComponent {
  constructor(public storeService: StoreService) {}
}
