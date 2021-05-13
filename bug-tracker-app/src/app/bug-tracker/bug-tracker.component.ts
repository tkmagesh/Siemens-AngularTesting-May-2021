import { Component, OnInit } from '@angular/core';
import { Bug } from './models/bug';
import { BugOperationsService } from './services/bugOperations.service';


@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bug-tracker.component.html',
  styleUrls: ['./bug-tracker.component.css']
})
export class BugTrackerComponent implements OnInit {

  public bugs : Bug[] = [];
 
  public sortAttr : string = '';
  public sortDesc : boolean = false;
  

  constructor(private bugOperations : BugOperationsService) { }

  ngOnInit(): void {
    //this.bugs = this.bugOperations.getAll();
    this.bugOperations
      .getAll()
      .subscribe(bugs => this.bugs = bugs);
  }

  onNewBugCreated(newBug : Bug){
    this.bugs = [...this.bugs, newBug];
  }

  onBugNameClick(bugToToggle : Bug){
   this.bugOperations
    .toggle(bugToToggle)
    .subscribe(toggledBug => {
      this.bugs = this.bugs.map(bug => bug.id === bugToToggle.id ? toggledBug : bug);
    })
   
  }

  onRemoveClick(bugToRemove : Bug){
    this.bugOperations
      .remove(bugToRemove)
      .subscribe(() => {
        this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id);
      })
    
  }

  onRemoveClosedClick(){
    //this.bugs = this.bugs.filter(bug => !bug.isClosed)
    this.bugs
      .filter(bug => bug.isClosed)
      .forEach(closedBug => this.onRemoveClick(closedBug));
  }

  
}
