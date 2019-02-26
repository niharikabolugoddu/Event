import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a:boolean=false;
  title = 'Hello';
  click(){
    this.a=!this.a;
    if(this.a){
      this.title="world";
    }
    else{
      this.title="hello";
    }
   
  }

}
