import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {StoreService} from '../store.service';
import {Partisan, Class, Status} from '../app.definitions';
import { format } from 'url';

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
  previousName = null;
  previousNote = null;
  columnsToDisplay = ['name', 'class', 'status', 'note'];
  columnToTitle = {
    name: 'Name',
    class: 'Klasse',
    status: 'Status',
    note: 'Anmerkungen'
  };
  expandedElement: Partisan | null;

  constructor(public storeService: StoreService) {}

  selectPartisan(partisan: Partisan) {
    this.previousName = partisan ? partisan.name : null;
    this.previousNote = partisan ? partisan.note : null;
    this.expandedElement = partisan;
  }

  logClassChange(partisan: Partisan) {
    this.storeService.log(`Klasse von "${partisan.name}" auf "${partisan.class}" geändert.`, 'Spielleiter');
  }

  logStatusChange(partisan: Partisan) {
    this.storeService.log(`Status von "${partisan.name}" auf "${partisan.status}" geändert.`, 'Spielleiter');
  }

  logNameChange(partisan: Partisan) {
    if (partisan.name !== this.previousName) {
      this.storeService.log(`Name von Partisan #${partisan.id} auf "${partisan.name}" geändert.`, 'Spielleiter');
      this.previousName = partisan.name;
    }
  }

  logNoteChange(partisan: Partisan) {
    if (partisan.note !== this.previousNote) {
      this.storeService.log(`Notiz zu "${partisan.name}" auf "${partisan.note}" geändert.`, 'Spielleiter');
      this.previousNote = partisan.note;
    }
  }
}
