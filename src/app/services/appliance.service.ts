export class ApplianceService{

  appliances = [
      {
        name: 'Routeur',
        status: 'éteint'
      },
      {
        name: 'Ordinateur',
        status: 'allumé'
      },
      {
        name: 'Switch',
        status: 'éteint'
      }
    ];

   onswtichONall(){
   console.log("ON ALL");
    for(let appliance of this.appliances)
      appliance.status="allumé";
    }
   onswtichOFFall(){
      for(let appliance of this.appliances)
        appliance.status="éteint"
    }
    onswitchOnOne(i:number){
    this.appliances[i].status="allumé";
    }
    onswitchOffOne(i: number){
    this.appliances[i].status="éteint";
    }
}
