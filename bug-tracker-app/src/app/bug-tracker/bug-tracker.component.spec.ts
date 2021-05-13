import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UtilsModule } from '../utils/utils.module';

import { BugTrackerComponent } from './bug-tracker.component';
import { BugEditComponent } from './components/bug-edit.component';
import { BugStatsComponent } from './components/bug-stats.component';
import { ClosedCountPipe } from './pipes/closedCount.pipe';
import { BugApiService } from './services/bugApi.service';
import { BugOperationsService } from './services/bugOperations.service';

describe('BugTrackerComponent', () => {
  let component: BugTrackerComponent;
  let fixture: ComponentFixture<BugTrackerComponent>;

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ BugTrackerComponent, BugStatsComponent, BugEditComponent, ClosedCountPipe ],
        imports : [HttpClientModule, UtilsModule, CommonModule],
        providers: [BugOperationsService, BugApiService]
      })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(BugTrackerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      })
  }))
  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
