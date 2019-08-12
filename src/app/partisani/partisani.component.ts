import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {Partisan, Class, Status} from '../app.definitions';

const PARTISAN_DATA: Partisan[] = [
  {
    name: 'Hans',
    note: 'dude that x',
    class: Class.Militia,
    status: Status.Healthy
  }, {
    name: 'Hanzo',
    note: 'asdf',
    class: Class.Militia,
    status: Status.Healthy
  },
];

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
  dataSource = PARTISAN_DATA;
  columnsToDisplay = ['name', 'class', 'status'];
  expandedElement: Partisan | null;
  class: Class;
  status: Status;
}
