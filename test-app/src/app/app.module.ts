import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterComponent } from './components/greeter/greeter.component';
import { GreeterService } from './services/greeter.service';
import { LoggerService } from './services/logger.service';
import { TimeService } from './services/time.service';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    /* GreeterService,
    LoggerService,
    TimeService */
  ],
  bootstrap: [GreeterComponent]
})
export class AppModule { }
