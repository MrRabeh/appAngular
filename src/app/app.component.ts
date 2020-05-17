import { Component ,OnInit} from '@angular/core';
import { ApplianceService} from './services/appliance.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Tarik';
  isAuth = false;

  applianceName: string;
  applianceStatus: string;
  appliance: any[];

  constructor(private applianceservice:ApplianceService){
  }
  ngOnInit(){
    this.appliance = this.applianceservice.appliances;
  }

  onallumer(){
   this.applianceservice.onswtichONall();
  }
  onenttendre(){
   this.applianceservice.onswtichOFFall();
  }
}
