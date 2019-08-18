import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { StateButtonsComponent } from './state-buttons/state-buttons.component';
import { OverviewComponent } from './overview/overview.component';
import { PartisaniComponent } from './partisani/partisani.component';
import { MissionComponent } from './mission/mission.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    StateButtonsComponent,
    OverviewComponent,
    PartisaniComponent,
    MissionComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
