import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {StoreService} from '../store.service';
import {Partisan, Class, Status} from '../app.definitions';

@Component({
  selector: 'app-partisani',
  styleUrls: ['partisani.component.sass'],
  templateUrl: 'partisani.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PartisaniComponent {
  class = Class;
  status = Status;
  keys = Object.keys;
  columnsToDisplay = ['name', 'class', 'status', 'note'];
  columnToTitle = {
    name: 'Name',
    class: 'Klasse',
    status: 'Status',
    note: 'Anmerkungen'
  };
  expandedElement: Partisan | null;

  constructor(public storeService: StoreService) {}
}
