import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GreeterComponent } from './components/greeter/greeter.component';
import { ElapsedPipe } from './pipes/elapsed.pipe';
import { TrimTextPipe } from './pipes/trimText.pipe';
import { GreeterService } from './services/greeter.service';
import { LoggerService } from './services/logger.service';
import { TimeService } from './services/time.service';
import * as moment from 'moment';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    ElapsedPipe,
    TrimTextPipe
  ],
  imports: [
    BrowserModule
    ,HttpClientModule
  ],
  providers: [
    /* GreeterService,
    LoggerService,
    TimeService */
     { provide: 'MOMENT', useValue : moment}
  ],
  bootstrap: [GreeterComponent]
})
export class AppModule { }
