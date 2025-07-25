import { Component } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedFeature: string = 'documents';
  
  switchView(feature: string) {
    this.selectedFeature = feature;
  }
}
