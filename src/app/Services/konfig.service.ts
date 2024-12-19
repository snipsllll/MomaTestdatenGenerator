import {Injectable} from '@angular/core';
import {
  IAuswertungsLayout,
  IBuchung,
  IDiagramm,
  IFixkostenEintrag,
  IGeplanteAusgabe,
  IGeplanteAusgabenBuchung,
  ISparschweinEintrag,
  IWunschlistenEintrag,
  SavedData,
  SavedMonth
} from '../Models/Interfaces';
import {getRandomColor, getRandomDateInRange, getRandomNumberInRange} from '../Models/functions';
import {
  BarChartValueOptions,
  TagesAnzeigeOptions,
  TopBarBudgetOptions,
  XAchsenSkalierungsOptionen
} from '../Models/Enums';

@Injectable({
  providedIn: 'root'
})
export class KonfigService {

  anzahlBuchungen = 200;
  anzahlBuchungsKategorien = 12;
  anzahlStandardFixkostenEintraege = 123;
  anzahlSparschweinEintraege = 0;
  anzahlWunschlistenEintraege = 23;
  anzahlManuellerAuswertungsLayouts = 5;
  anzahlDiagrammeProAuswertungsLayout = 9;
  anzahlGeplanteAusgabenKategorienProMonth = 8;
  anzahlGeplanteAusgabenBuchungenProMonth = 0;

  fileName?: string;
  defaultFileName = 'testDaten.txt';

  dateFrom: Date = new Date(2023, 1, 1);
  dateTo: Date = new Date();

  yAchsenOptionen = ['Restgeld pro Tag', 'Veränderung im Sparschwein', 'Restgeld für Monat', 'von Wunschliste gekauft', 'Differenz zum daily Budget'];
  xAchsenOptionen = ['Alle tage im Monat', 'alle Monate im Jahr'];

  private isInProduction = false;

  constructor() { }

  generateTotallyRandom() {
    this.anzahlBuchungsKategorien = getRandomNumberInRange(0,15);
    this.anzahlBuchungen = getRandomNumberInRange(10, 200);
    this.anzahlGeplanteAusgabenKategorienProMonth = getRandomNumberInRange(0,8);
    this.anzahlWunschlistenEintraege = getRandomNumberInRange(0,65);
    this.anzahlDiagrammeProAuswertungsLayout = getRandomNumberInRange(1, 8);
    this.anzahlManuellerAuswertungsLayouts = getRandomNumberInRange(1, 6);
    this.anzahlSparschweinEintraege = getRandomNumberInRange(0, 40);
    this.anzahlGeplanteAusgabenBuchungenProMonth = getRandomNumberInRange(0, 70);

    this.saveInFiles(this.generateRandomTestdata());
  }

  generate() {
    this.saveInFiles(this.generateTestdata());

  }
  generateRandom() {
    this.anzahlBuchungsKategorien = getRandomNumberInRange(0,15);
    this.anzahlBuchungen = getRandomNumberInRange(10, 200);
    this.anzahlGeplanteAusgabenKategorienProMonth = getRandomNumberInRange(0,8);
    this.anzahlWunschlistenEintraege = getRandomNumberInRange(0,65);
    this.anzahlDiagrammeProAuswertungsLayout = getRandomNumberInRange(1, 8);
    this.anzahlManuellerAuswertungsLayouts = getRandomNumberInRange(1, 6);
    this.anzahlSparschweinEintraege = getRandomNumberInRange(0, 40);
    this.anzahlGeplanteAusgabenBuchungenProMonth = getRandomNumberInRange(0, 70);

    this.generate();
  }

  private generateTestdata(): SavedData {

    const buchungsKategorien: { id: number; name: string }[] = [];
    for (let i = 1; i <= this.anzahlBuchungsKategorien; i++) {
      buchungsKategorien.push({
        id: i,
        name: `Buchungs-Kategorie ${i}`
      })
    }

    const standardFixkostenEintraege: IFixkostenEintrag[] = [];
    for (let i = 1; i <= this.anzahlStandardFixkostenEintraege; i++) {
      standardFixkostenEintraege.push({
        id: i,
        data: {
          beschreibung: `Fixkosten-Beschreibung ${1}`,
          betrag: i,
          title: `Fixkosten-Titel ${i}`
        }
      })
    }

    const sparEintraege: ISparschweinEintrag[] = [];
    for (let i = 1; i <= this.anzahlSparschweinEintraege; i++) {
      sparEintraege.push({
        id: i,
        data: {
          betrag: i,
          title: `Sparschwein-Eintrag-Titel ${i}`,
          date: getRandomDateInRange(this.dateFrom, this.dateTo),
          zusatz: `Sparschwein-Eintrag-Zusatz ${i}`
        }
      })
    }

    const auswertungsLayouts: IAuswertungsLayout[] = [];
    for (let i = 1; i <= this.anzahlManuellerAuswertungsLayouts; i++) {
      const diagramme: IDiagramm[] = [];
      for (let j = 1; j < this.anzahlDiagrammeProAuswertungsLayout; j++) {
        let yAchse = this.yAchsenOptionen[getRandomNumberInRange(0, this.yAchsenOptionen.length - 1)];
        diagramme.push({
          id: j,
          data: {
            balkenBeschriftung: `${yAchse} ${i}.${j}`,
            balkenColor: getRandomColor(),
            diagramTitle: `Test-Diagrammtitel ${i}.${j}`,
            lineOption: {
              lineValue: getRandomNumberInRange(1, 50),
              lineType: ''
            },
            xAchse: this.xAchsenOptionen[getRandomNumberInRange(0, this.xAchsenOptionen.length - 1)],
            yAchse: yAchse,
            selectedDiagramType: 'benutzerdefiniert'
          }
        })
      }
      auswertungsLayouts.push({
        id: i,
        data: {
          layoutTitle: `Test-Layout ${i}`,
          diagramme: diagramme
        }
      })
    }

    const wunschlistenEintraege: IWunschlistenEintrag[] = [];
    for (let i = 1; i <= this.anzahlWunschlistenEintraege; i++) {
      const erstelltAm: Date = getRandomDateInRange(this.dateFrom, new Date());
      const gekauft: boolean = getRandomNumberInRange(1, 5) % 2 === 0;
      let gekauftAm: Date | undefined = undefined;
      if (gekauft) {
        gekauftAm = getRandomDateInRange(erstelltAm, new Date());
      }

      wunschlistenEintraege.push({
        id: i,
        data: {
          betrag: i,
          title: `Sparschwein-Eintrag-Titel ${i}`,
          date: getRandomDateInRange(this.dateFrom, this.dateTo),
          zusatz: `Sparschwein-Eintrag-Zusatz ${i}`,
          erstelltAm: erstelltAm,
          gekauft: gekauft,
          gekauftAm: gekauftAm
        }
      })
    }

    const savedMonths: SavedMonth[] = [];
    for (let year = this.dateFrom.getFullYear(); year <= this.dateTo.getFullYear(); year++) {
      for (let month = 0; month < 12; month++) {

        const geplanteAusgaben: IGeplanteAusgabe[] = [];
        const specialFixkostenEintraege: IFixkostenEintrag[] = [];

        for (let i = 1; i <= this.anzahlGeplanteAusgabenKategorienProMonth; i++) {
          geplanteAusgaben.push({
            id: i,
            data: {
              title: `Test-Geplante-Ausgaben-Kategorie-Titel: ${i}`,
              betrag: getRandomNumberInRange(200, 800),
              beschreibung: `Test-Geplante-Ausgaben-Kategorie-Beschreibung: ${i}`
            }
          })
        }

        savedMonths.push({
          date: new Date(year, month),
          totalBudget: getRandomNumberInRange(15000, 20000),
          sparen: getRandomNumberInRange(0, 2000),
          geplanteAusgaben: geplanteAusgaben,
          uebernommeneStandardFixkostenEintraege: standardFixkostenEintraege,
          specialFixkostenEintraege: specialFixkostenEintraege
        });
      }
    }

    let buchungen: IBuchung[] = [];
    const geplanteAusgabenBuchungen: IGeplanteAusgabenBuchung[] = [];
    savedMonths.forEach(month => {
      const daysInMonth = new Date(month.date.getFullYear(), month.date.getMonth() + 1, 0).getDate();
      console.log(daysInMonth)
      for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(month.date.getFullYear(), month.date.getMonth(), day);

        for(let i= 0; i < getRandomNumberInRange(0,4); i++) {
          const geplanteBuchung = getRandomNumberInRange(1, 4) === 1;
          const buchungsKategorie = geplanteBuchung ? getRandomNumberInRange(1, this.anzahlGeplanteAusgabenKategorienProMonth) : getRandomNumberInRange(1, this.anzahlBuchungsKategorien)

          const buchung = {
            id: buchungen.length + 1,
            data: {
              date: currentDate,
              time: "12:00",
              title: `Test-Buchung ${buchungen.length + geplanteAusgabenBuchungen.length + 1}`,
              betrag: getRandomNumberInRange(1, 50),
              beschreibung: `Test Buchung Beschreibung ${buchungen.length + 1}`,
              buchungsKategorie: buchungsKategorie,
              geplanteBuchung: geplanteBuchung
            },
          };

          if(buchung.data.geplanteBuchung) {
            geplanteAusgabenBuchungen.push(buchung);
          } else {
            buchungen.push(buchung);
          }
        }
      }
    })
    buchungen = buchungen.filter(buchung => buchung.id < this.anzahlBuchungen);


    const testSavedData: SavedData = {
      buchungen: buchungen,
      savedMonths: savedMonths,
      buchungsKategorien: buchungsKategorien,
      standardFixkostenEintraege: standardFixkostenEintraege,
      sparEintraege: sparEintraege,
      auswertungsLayouts: auswertungsLayouts,
      wunschlistenEintraege: wunschlistenEintraege,
      settings: {
        wunschlistenFilter: {
          gekaufteEintraegeAusblenden: true,
          selectedFilter: "alle",
        },
        toHighBuchungenEnabled: true,
        topBarAnzeigeEinstellung: TopBarBudgetOptions.monat,
        tagesAnzeigeOption: TagesAnzeigeOptions.RestbetragVonSollBudget,
      },
      dbVersion: 4,
      geplanteAusgabenBuchungen: geplanteAusgabenBuchungen
    };

    return testSavedData;
  }

  private generateRandomTestdata() {

  }

  private saveInFiles(dataToSave: any) {
    try {
      const jsonString = JSON.stringify(dataToSave, null, 2);

      localStorage.setItem(this.fileName ?? this.defaultFileName, jsonString);
      console.log('Daten erfolgreich in localStorage gespeichert.');

      // Nur in der Entwicklungsumgebung: JSON-Datei herunterladen
      if (!this.isInProduction) {
        this.downloadAsFile(jsonString);
      }
    } catch (e) {
      console.error('Fehler beim Speichern in localStorage:', e);
    }
  }

  private downloadAsFile(jsonString: string): void {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = this.fileName ?? this.defaultFileName;
    a.click();
    window.URL.revokeObjectURL(url);
    console.log('JSON-Datei wurde heruntergeladen.');
  }
}
