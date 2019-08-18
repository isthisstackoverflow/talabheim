import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-state-buttons',
  templateUrl: './state-buttons.component.html',
  styleUrls: ['./state-buttons.component.sass']
})
export class StateButtonsComponent implements OnInit {
  constructor(public storeService: StoreService) {}

  ngOnInit() {
    document.getElementById('uploadAnchorElem').onchange = this.loadFile.bind(this);
  }

  save() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.storeService.state));
    const dlAnchorElem = document.getElementById('downloadAnchorElem');
    dlAnchorElem.setAttribute('href', dataStr);
    dlAnchorElem.setAttribute('download', 'partisanenverwaltung.json');
    dlAnchorElem.click();
  }

  load() {
    document.getElementById('uploadAnchorElem').click();
  }

  loadFile(event: any) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.storeService.state = {
        ...this.storeService.state,
        ...JSON.parse(e.target.result)
      };
    };
    reader.readAsText(event.target.files[0]);
  }
}
