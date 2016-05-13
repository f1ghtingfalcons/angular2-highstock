import { Component } from '@angular/core';
import { ChartComponent } from './chart';

@Component({
  moduleId: module.id,
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ChartComponent]
})
export class AppComponent {
  title = 'angular2-highstock works!';
}
