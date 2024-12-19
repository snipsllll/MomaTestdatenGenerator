import {Months, TagesAnzeigeOptions, TopBarBudgetOptions} from "./Enums";

export interface Month {
  totalBudget?: number;
  sparen?: number;
  startDate: Date;
  endDate?: Date;
  daysInMonth?: number;
  budget?: number;
  istBudget?: number;
  dailyBudget?: number;
  weeks?: Week[];
  gesperrteFixKosten?: IFixkostenEintrag[];
  monatAbgeschlossen?: boolean;
  uebernommeneStandardFixkostenEintraege?: IMonthFixkostenEintrag[];
  specialFixkostenEintraege?: IMonthFixkostenEintrag[];
  geplanteAusgaben?: IGeplanteAusgabe[];
}

export interface Week {
  startDate: Date;
  endDate: Date;
  daysInWeek: number;
  budget?: number;
  istBudget?: number;
  days: Day[];
}

export interface Day {
  date: Date;
  budget?: number;
  istBudget?: number;
  buchungen?: IBuchung[];
  geplanteAusgabenBuchungen?: IGeplanteAusgabenBuchung[];
}

export interface BudgetInfosForMonth {
  totalBudget: number;
  sparen: number;
  budget: number;
  dayBudget: number;
  istBudget?: number;
  fixKostenSumme?: number;
  fixKostenEintraege?: IMonthFixkostenEintrag[];
  fixKostenGesperrt?: boolean;
  geplanteAusgabenSumme?: number;
  geplanteAusgaben?: IGeplanteAusgabe[];
  geplanteAusgabenRestgeld?: number;
  geplanteAusgabenKategorienRestgeld?: IGeplanteAusgabeRestgeld[];
}

export interface SavedData {
  buchungen: IBuchung[];
  buchungsKategorien: { id: number; name: string }[];
  savedMonths: SavedMonth[];
  standardFixkostenEintraege: IFixkostenEintrag[];
  sparEintraege: ISparschweinEintrag[];
  wunschlistenEintraege: IWunschlistenEintrag[];
  auswertungsLayouts: IAuswertungsLayout[];
  settings: Settings;
  dbVersion: number;
  geplanteAusgabenBuchungen: IGeplanteAusgabenBuchung[];
}

export interface FireData {
  buchungen: IFireBuchung[];
  buchungsKategorien: { id: number; name: string }[];
  savedMonths: FireMonth[];
  standardFixkostenEintraege: IFixkostenEintrag[];
  sparEintraege: IFireSparschweinEintrag[];
  wunschlistenEintraege: IWunschlistenEintrag[];
  auswertungsLayouts: IAuswertungsLayout[];
  settings: Settings;
  dbVersion: number;
  geplanteAusgabenBuchungen: IGeplanteAusgabenBuchung[];
}

export interface IGeplanteAusgabenBuchung {
  id: number;
  data: IGeplanteAusgabenBuchungData;
}

export interface IGeplanteAusgabenBuchungData {
  date: Date;
  time: string;
  title: string;
  betrag: number | null;
  beschreibung?: string;
  buchungsKategorie?: number;
}

export interface IFireGeplanteAusgabenBuchung {
  id: number;
  data: IFireGeplanteAusgabenBuchungData;
}

export interface IFireGeplanteAusgabenBuchungData {
  date: any;
  time: string;
  title: string;
  betrag: number | null;
  beschreibung?: string;
  buchungsKategorie?: number;
}

export interface Settings {
  wunschlistenFilter: WunschlistenFilter;
  toHighBuchungenEnabled: boolean;
  topBarAnzeigeEinstellung?: TopBarBudgetOptions;
  tagesAnzeigeOption?: TagesAnzeigeOptions;
}

export interface WunschlistenFilter {
  gekaufteEintraegeAusblenden: boolean;
  selectedFilter: string;
}

export interface SavedMonth {
  date: Date;
  totalBudget: number;
  sparen: number;
  geplanteAusgaben?: IGeplanteAusgabe[];
  uebernommeneStandardFixkostenEintraege?: IMonthFixkostenEintrag[];
  specialFixkostenEintraege?: IMonthFixkostenEintrag[];
}

export interface FireMonth {
  // Hier bleibt der Timestamp-Typ erhalten, aber wir können ihn später in ein Date umwandeln
  date: any;
  totalBudget: number;
  sparen: number;
  geplanteAusgaben?: IGeplanteAusgabe[];
  uebernommeneStandardFixkostenEintraege?: IMonthFixkostenEintrag[];
  specialFixkostenEintraege?: IMonthFixkostenEintrag[];
}

export interface SaveDataUpdateInfos {
  isInitialLoad?: boolean;
  fireData: FireData;
}

export interface IGeplanteAusgabe {
  id: number;
  data: IGeplanteAusgabeData;
}

export interface IGeplanteAusgabeData {
  title: string;
  betrag: number;
  beschreibung?: string;
}

export interface IGeplanteAusgabeRestgeld {
  id: number;
  title: string;
  restgeldBetrag: number;
}

export interface MenuItem {
  label: string;
  onClick: (input?: any) => void;
  grayedOut?: boolean;
  isEditButton?: boolean;
}

export interface AvailableMoney {
  availableForMonth: number;
  availableForWeek: number;
  availableForDayIst: number;
  availableForDaySoll: number;
  noData: boolean;
}

export interface IMonth {
  month: Months;
  year: number;
}

export interface IDay {
  date: Date;
}

export interface IBuchung {
  id: number;
  data: IBuchungData;
}

export interface IBuchungData {
  date: Date;
  time: string;
  title: string
  betrag: number | null
  beschreibung?: string
  buchungsKategorie?: number;
  geplanteBuchung?: boolean;
}

export interface IFireBuchung {
  id: number;
  data: IFireBuchungData;
}

export interface IFireBuchungData {
  date: any;
  time: string;
  title: string
  betrag: number | null
  beschreibung?: string
  buchungsKategorie?: number;
  geplanteBuchung?: boolean;
}

export interface IMonthFixkostenEintrag {
  id: number;
  data: IMonthFixkostenEintragData;
}

export interface IFixkostenEintrag {
  id: number;
  data: IFixkostenEintragData;
}

export interface IMonthFixkostenEintragData {
  title: string;
  betrag: number;
  beschreibung?: string;
  isExcluded?: boolean;
  isStandardFixkostenEintrag?: boolean;
}

export interface IFixkostenEintragData {
  title: string;
  betrag: number;
  beschreibung?: string;
}

export interface IWunschlistenEintrag {
  id: number;
  data: IWunschlistenEintragData;
}

export interface IWunschlistenEintragData {
  date: Date;
  title: string;
  betrag: number;
  zusatz?: string;
  gekauft: boolean;
  gekauftAm?: Date;
  erstelltAm: Date;
}

export interface ISparschweinEintrag {
  id: number;
  data: ISparschweinEintragData;
}

export interface ISparschweinEintragData {
  date: Date;
  title?: string;
  betrag: number;
  zusatz?: string;
  vonWunschliste?: boolean;
  wunschlistenId?: number;
  vonMonat?: boolean;
}

export interface IFireSparschweinEintrag {
  id: number;
  data: IFireSparschweinEintragData;
}

export interface IFireSparschweinEintragData {
  date: any;
  title?: string;
  betrag: number;
  zusatz?: string;
  vonWunschliste?: boolean;
  wunschlistenId?: number;
  vonMonat?: boolean;
}

export interface BarChartViewModel {
  diagramLabel: string;
  labels: string[]; // Labels für die x-Achse (z. B. Monate)
  datasets: {        // Datensätze mit Werten und Farben
    label: string;   // Name des Datensatzes (z. B. "Umsatz" oder "Gewinn")
    data: number[];  // Werte für jeden Balken in der Kategorie
    backgroundColor: string; // Farbe für die Balken dieses Datensatzes
    horizontaleLinie?: number; // Wert für die horizontale Linie
    showHorizontaleLinie?: boolean; // Ob die Linie angezeigt werden soll
  }[];
}

export interface IGeplanteAusgabenKategorie {
  id: number;
  title: string;
  betrag: number;
}

export interface AuswertungenDialogViewModel {
  elemente: IAuswertungsLayout[];
  onSaveClicked: (data: IAuswertungsLayout[]) => void;
  onAbortClicked: () => void;
}

export interface IAuswertungsLayout {
  id: number;
  data: IAuswertungsLayoutData;
}

export interface IAuswertungsLayoutData {
  layoutTitle: string;
  diagramme: IDiagramm[];
}

export interface IDiagramm {
  id: number;
  data: IDiagrammData;
}

export interface IDiagrammData {
  selectedDiagramType: string;
  diagramTitle: string;
  balkenBeschriftung: string;
  xAchse: string;
  yAchse: string;
  balkenColor?: string;
  filterOption?: {
    filter: string;
    value: any
  };
  lineOption?: {
    lineType: string;
    lineValue?: number;
  };
}

