/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UtilsModule } from './utils/utils.module';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { BugTrackerModule } from './bug-tracker/bug-tracker.module';


@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent
  ],
  imports: [
    BrowserModule,
    UtilsModule,
    HttpClientModule,
    BugTrackerModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
