import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {KonfigurationsComponent} from './Components/konfigurations/konfigurations.component';
import {KonfigService} from './Services/konfig.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KonfigurationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'MomaTestdatenGenerator';

  constructor(private konfigService: KonfigService) {

  }

  generate() {
    this.konfigService.generate();
  }

  generateRandom() {
    this.konfigService.generateRandom();
  }
}
