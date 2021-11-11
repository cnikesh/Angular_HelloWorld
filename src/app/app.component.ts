import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello World';

  count: number = 0;

  increaseCount = () => {
    this.count += 1;
  }
  
  decreaseCount(){
    this.count -= 1;
  }

  resetCount(){
    this.count = 0;
  }
}
