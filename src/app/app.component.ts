import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  disable = true
  initalCount = 0;
  showCounter= true;
  getName(name:string){
    // alert('clicked');
    this.showCounter = (this.showCounter) ? false: true;
  }


  count(event:string){
    
    switch (event) {
      case "increase":
          this.initalCount++;
        break;
    
      default:
        (this.initalCount > 0 ) ?this.initalCount-- : this.initalCount = 0;
        break;
    }
  }
}
