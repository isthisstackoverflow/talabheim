import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { StateButtonsComponent } from './state-buttons/state-buttons.component';
import { OverviewComponent } from './overview/overview.component';
import { PartisaniComponent } from './partisani/partisani.component';
import { MissionComponent } from './mission/mission.component';
import { EditorComponent } from './editor/editor.component';
import { RawEditorComponent } from './raw-editor/raw-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    StateButtonsComponent,
    OverviewComponent,
    PartisaniComponent,
    MissionComponent,
    EditorComponent,
    RawEditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDividerModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
