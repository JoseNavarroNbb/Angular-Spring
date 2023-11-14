import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';//interpolar en archivo html
  curso: string = 'Angular 16  con Spring';
  alumno: string = 'José Navarro';
}
