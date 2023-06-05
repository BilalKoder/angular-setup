import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  formSubmit=false;
  userData:any = {};
  color="green";
  users = ["bilal","ali"];

  getData(data:NgForm){
    console.log(data)

    if(!!data) {
      this.userData = data;
      this.formSubmit =true;
    } else{
      this.userData = {};
      this.formSubmit =false;
    }
  }
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
