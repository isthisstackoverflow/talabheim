import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {StoreService} from '../store.service';
import {Group, Class, Status, Partisan} from '../app.definitions';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GroupsComponent {
  class = Class;
  status = Status;
  keys = Object.keys;
  previousName = null;
  columnsToDisplay = ['name', 'partisani'];
  columnToTitle = {
    name: 'Name',
    partisani: 'Mitglieder'
  };
  expandedElement: Group | null;

  constructor(public storeService: StoreService) {}

  selectGroup(group: Group) {
    this.previousName = group ? group.name : null;
    this.expandedElement = group;
  }

  logNameChange(group: Group) {
    if (group.name !== this.previousName) {
      this.storeService.log(`Name von Gruppe #${group.id} auf "${group.name}" geändert.`, 'Spielleiter');
      this.previousName = group.name;
    }
  }

  isPartisanDisabled(partisan: Partisan): boolean {
    return this.storeService.state.groups.filter(g => g.partisani.includes(partisan)).length > 0
  }

  logIconChange(group: Group) {
    this.storeService.log(`Icon von "${group.name}" auf "${group.icon}" geändert.`, 'Spielleiter');
  }

  logColorChange(group: Group) {
    this.storeService.log(`Farbe von "${group.name}" auf "${group.color}" geändert.`, 'Spielleiter');
  }

  logMemberChange(group: Group) {
    this.storeService.log(`Partisanen von Gruppe ${group.name} auf "${group.partisani}" geändert.`, 'Spielleiter');
  }

  printPartisani(partisani: Partisan[]): string {
    return partisani.map(p => p.name).join(', ')
  }
}
