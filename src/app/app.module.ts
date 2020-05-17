import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { FormsModule } from '@angular/forms';
import { ApplianceService} from './services/appliance.service';

@NgModule({
  declarations: [
    AppComponent,
    ApplianceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ApplianceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
