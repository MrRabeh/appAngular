import { Component, Input,OnInit } from '@angular/core';
import { ApplianceService } from '../services/appliance.service'

@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.css']
})
export class ApplianceComponent implements OnInit {

  @Input() applianceName: string;
  @Input() applianceStatus: string;
  @Input() indexappliance: number;

  constructor(private applianceservice: ApplianceService) { }
      ngOnInit(): void {
      }
      getstatus(){
        return this.applianceStatus;
      }
      onswitchOneOFF(){
        this.applianceservice.onswitchOffOne(this.indexappliance);
      }
      onswitchOneON(){
        this.applianceservice.onswitchOnOne(this.indexappliance);
      }
}
