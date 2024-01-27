import { Component } from '@angular/core';
import arrayWords from "../utils/words"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words = '';
  limit = 10;

  handleRandomNumber(){
    this.limit = Math.random()*10;
  }

  genrate(){
    this.words = arrayWords.slice(0, this.limit).join(" ");
  }



}
