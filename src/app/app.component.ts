import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  initalCount = 0;
  getName(name:string){
    alert('clicked');
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
