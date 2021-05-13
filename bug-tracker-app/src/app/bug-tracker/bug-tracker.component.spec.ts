import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { BugTrackerComponent } from './bug-tracker.component';
import { BugTrackerModule } from './bug-tracker.module';
import { BugOperationsService } from './services/bugOperations.service';
import { bugs as mockbugs } from './mock-data/bugs';
import { Bug } from './models/bug';
import { BugEditComponent } from './components/bug-edit.component';
import { By } from '@angular/platform-browser';

fdescribe('BugTrackerComponent', () => {
  let component: BugTrackerComponent;
  let fixture: ComponentFixture<BugTrackerComponent>;

  beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports : [
          BugTrackerModule
        ],
        providers: [
          
        ]
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

  it('should populate the bugs when initialized', () => {
    let bugOperationSpy : BugOperationsService = TestBed.inject(BugOperationsService);
    spyOn(bugOperationSpy, "getAll").and.returnValue(of(mockbugs));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.bugs.length).toBe(3)
  })

  it('should populate the bugs when initialized', () => {
    let bugOperationSpy : BugOperationsService = TestBed.inject(BugOperationsService);
    spyOn(bugOperationSpy, "getAll").and.returnValue(of(mockbugs));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.bugs.length).toBe(3)
  });

  it('should add the new bug when the bugEditcomponents emits the event', () => {
    let bugOperationSpy : BugOperationsService = TestBed.inject(BugOperationsService);
    spyOn(bugOperationSpy, "getAll").and.returnValue(of([]));
    component.ngOnInit();
    fixture.detectChanges();
    const el = fixture.debugElement;
    const bugEditComponent : BugEditComponent = el.query(By.directive(BugEditComponent)).componentInstance;
    bugEditComponent.created.emit({ id : 100, name : 'Dummy Bug', isClosed : false, createdAt : new Date()});
    expect(component.bugs.length).toBe(1);
  })

});
