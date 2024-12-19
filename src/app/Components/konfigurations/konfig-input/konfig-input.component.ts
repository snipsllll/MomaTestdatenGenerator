import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KonfigInputViewModel } from '../../../Models/ViewModels/KonfigInputViewModel';

@Component({
  selector: 'app-konfig-input',
  imports: [
    FormsModule
  ],
  templateUrl: './konfig-input.component.html',
  styleUrls: ['./konfig-input.component.css'], // Korrigiert zu `styleUrls`
  standalone: true
})
export class KonfigInputComponent implements OnInit {

  @Input() viewModel!: KonfigInputViewModel;
  @Output() onValueChange: EventEmitter<any> = new EventEmitter();
  value: any;

  ngOnInit() {
    this.value = this.viewModel.value; // Initialisierung des Werts
  }

  onValueChanged() {
    this.onValueChange.emit(this.value); // Wertänderung weitergeben
  }
}
