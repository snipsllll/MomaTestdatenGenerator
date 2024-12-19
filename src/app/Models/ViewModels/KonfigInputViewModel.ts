import { InputTypes } from '../Enums';

export interface KonfigInputViewModel {
  inputType: InputTypes; // Typisiert mit dem Enum
  label: string;
  value?: any; // Optionaler Startwert
  onChange?: (value: any) => void; // Callback bei Änderung
}
