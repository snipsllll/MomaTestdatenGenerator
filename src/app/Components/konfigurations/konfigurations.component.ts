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

  text: string = '';
  number: number = 0;
  konfigInputViewModels: KonfigInputViewModel[] = [];

  constructor(protected konfigService: KonfigService) {
    this.konfigInputViewModels = this.getKonfigInputViewModelList();
  }

  onTextChange = (newText: string) => {
    this.text = newText;
  };

  onNumberChange = (newNumber: number) => {
    this.number = newNumber;
  };

  private getKonfigInputViewModelList(): KonfigInputViewModel[] {
    return [
      {
        inputType: InputTypes.Text,
        label: 'Text 1',
        value: '',
        onChange: this.onTextChange
      },
      {
        inputType: InputTypes.Number,
        label: 'Number 1',
        value: 0,
        onChange: this.onNumberChange
      }
    ];
  }
}
