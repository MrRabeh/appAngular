import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarik';
  isAuth = false;

  constructor(){
      setTimeout(
        () => {
          this.isAuth = true;
        }, 4000
      );
  }

  onAllumer() {
      console.log('On allume tout !');
  }
}
