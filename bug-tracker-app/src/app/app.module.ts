/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UtilsModule } from './utils/utils.module';
import { HttpClientModule } from '@angular/common/http';

/* Components */
import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bug-tracker.component';
import { BugEditComponent } from './bug-tracker/components/bug-edit.component';
import { BugStatsComponent } from './bug-tracker/components/bug-stats.component';

/* Pipes */
import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

/* Services */
import { BugOperationsService } from './bug-tracker/services/bugOperations.service';
import { BugStorageService } from './bug-tracker/services/bugStorage.service';
import { BugApiService } from './bug-tracker/services/bugApi.service';


@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    BugStatsComponent,
    BugEditComponent,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    UtilsModule,
    HttpClientModule
  ],
  providers: [
    BugOperationsService,
    BugStorageService,
    BugApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
