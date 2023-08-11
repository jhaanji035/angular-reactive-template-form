import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parent = "Hello Child"
  
  receiveMessage(message: string) {
    console.log("Message received");
  }
  
}
