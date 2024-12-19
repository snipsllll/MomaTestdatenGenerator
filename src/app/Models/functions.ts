export function getRandomDateInRange(dateFrom: Date, dateTo: Date): Date {
  // Konvertiere die Daten in Zeitstempel (Millisekunden seit 1970)
  const fromTime = dateFrom.getTime();
  const toTime = dateTo.getTime();

  // Prüfe, ob der Bereich gültig ist
  if (fromTime > toTime) {
    throw new Error("dateFrom muss vor dateTo liegen.");
  }

  // Generiere eine zufällige Zeit zwischen den beiden Zeitstempeln
  const randomTime = fromTime + Math.random() * (toTime - fromTime);

  // Konvertiere den Zeitstempel zurück in ein Datum
  return new Date(randomTime);
}

export function getRandomColor(): string {
  // Generiere eine Zufallszahl zwischen 0 und 16777215 (0xFFFFFF)
  const randomColor = Math.floor(Math.random() * 16777215);
  // Konvertiere die Zahl in eine Hexadezimaldarstellung und stelle sicher, dass sie 6 Zeichen lang ist
  const hexColor = `#${randomColor.toString(16).padStart(6, '0')}`;
  return hexColor;
}

export function getRandomNumberInRange(from: number, to: number): number {
  if (from > to) {
    throw new Error("Der 'from'-Wert muss kleiner oder gleich dem 'to'-Wert sein.");
  }
  // Generiere eine Zufallszahl im Bereich [from, to] und runde auf die nächste Ganzzahl
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
