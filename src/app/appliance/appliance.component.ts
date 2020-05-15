import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-appliance',
  templateUrl: './appliance.component.html',
  styleUrls: ['./appliance.component.css']
})
export class ApplianceComponent implements OnInit {

  @Input() applianceName: string;
  applienceStatus: string='éteint';

  constructor() { }

  ngOnInit(): void {
  }

  getstatus(){
  return this.applienceStatus;
  }

}
