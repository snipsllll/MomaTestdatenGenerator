import { Component } from '@angular/core';
import { KonfigService } from '../../Services/konfig.service';
import { KonfigInputComponent } from './konfig-input/konfig-input.component';
import { InputTypes } from '../../Models/Enums';
import { KonfigInputViewModel } from '../../Models/ViewModels/KonfigInputViewModel';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-konfigurations',
  imports: [
    KonfigInputComponent,
    NgForOf
  ],
  templateUrl: './konfigurations.component.html',
  styleUrls: ['./konfigurations.component.css'], // Korrigiert zu `styleUrls`
  standalone: true
})
export class KonfigurationsComponent {

  konfigInputViewModels: KonfigInputViewModel[] = [];

  constructor(protected konfigService: KonfigService) {
    this.konfigInputViewModels = this.getKonfigInputViewModelList();
  }

  onAnzahlBuchungenChange = (value: number) => {
    this.konfigService.anzahlBuchungen = value;
  };

  onAnzahlBuchungsKategorienChange = (value: number) => {
    this.konfigService.anzahlBuchungsKategorien = value;
  };

  onAnzahlStandardFixkostenEintraegeChange = (value: number) => {
    this.konfigService.anzahlStandardFixkostenEintraege = value;
  };

  onAnzahlSparschweinEintraegeChange = (value: number) => {
    this.konfigService.anzahlSparschweinEintraege = value;
  };

  onAnzahlWunschlistenEintraegeChange = (value: number) => {
    this.konfigService.anzahlWunschlistenEintraege = value;
  };

  onAnzahlManuellerAuswertungsLayoutsChange = (value: number) => {
    this.konfigService.anzahlManuellerAuswertungsLayouts = value;
  };

  onAnzahlDiagrammeProAuswertungsLayoutChange = (value: number) => {
    this.konfigService.anzahlDiagrammeProAuswertungsLayout = value;
  };

  onAnzahlGeplanteAusgabenKategorienProMonthChange = (value: number) => {
    this.konfigService.anzahlGeplanteAusgabenKategorienProMonth = value;
  };

  onAnzahlGeplanteAusgabenBuchungenProMonthChange = (value: number) => {
    this.konfigService.anzahlGeplanteAusgabenBuchungenProMonth = value;
  };

  private getKonfigInputViewModelList(): KonfigInputViewModel[] {
    return [
      {
        inputType: InputTypes.Number,
        label: 'Anz Buchungen:',
        onChange: this.onAnzahlBuchungenChange,
        value: this.konfigService.anzahlBuchungen
      },
      {
        inputType: InputTypes.Number,
        label: 'Anz Buchungs-Kategorien:',
        onChange: this.onAnzahlBuchungsKategorienChange,
        value: this.konfigService.anzahlBuchungsKategorien
      },
      {
        inputType: InputTypes.Number,
        label: 'Anz Standard-Fixkosten-Einträge:',
        onChange: this.onAnzahlStandardFixkostenEintraegeChange,
        value: this.konfigService.anzahlStandardFixkostenEintraege
      },
      {
        inputType: InputTypes.Number,
        label: 'Anz Sparschwein-Einträge:',
        onChange: this.onAnzahlSparschweinEintraegeChange,
        value: this.konfigService.anzahlSparschweinEintraege
      },
      {
        inputType: InputTypes.Number,
        label: 'Anz Wunschlisten-Einträge:',
        onChange: this.onAnzahlWunschlistenEintraegeChange,
        value: this.konfigService.anzahlWunschlistenEintraege
      },
      {
        inputType: InputTypes.Number,
        label: 'Anz manueller Auswertungs-Layouts:',
        onChange: this.onAnzahlManuellerAuswertungsLayoutsChange,
        value: this.konfigService.anzahlManuellerAuswertungsLayouts
      },
      {
        inputType: InputTypes.Number,
        label: 'Anz Diagramme pro Auswertungs-Layout:',
        onChange: this.onAnzahlDiagrammeProAuswertungsLayoutChange,
        value: this.konfigService.anzahlDiagrammeProAuswertungsLayout
      },
      {
        inputType: InputTypes.Number,
        label: 'Anz geplanter Ausgaben-Kategorien pro Monat:',
        onChange: this.onAnzahlGeplanteAusgabenKategorienProMonthChange,
        value: this.konfigService.anzahlGeplanteAusgabenKategorienProMonth
      },
      {
        inputType: InputTypes.Number,
        label: 'Anz geplanter Ausgaben-Buchungen pro Monat:',
        onChange: this.onAnzahlGeplanteAusgabenBuchungenProMonthChange,
        value: this.konfigService.anzahlGeplanteAusgabenBuchungenProMonth
      }
    ];
  }
}
