import { Component, EventEmitter, Output } from "@angular/core";
import { Bug } from "../models/bug";
import { BugOperationsService } from "../services/bugOperations.service";

@Component({
    selector : 'app-bug-edit',
    template : `
        <section class="edit">
            <label for="">Bug Name :</label>
            <input type="text" (keyup)="newBugName = $any($event.target).value">
            <span> [ {{newBugName.length}} ] </span>
            <input type="button" value="Add New" (click)="onAddNewClick()">
        </section>
    `
})
export class BugEditComponent{
    public newBugName : string = '';

    @Output()
    public created : EventEmitter<Bug> = new EventEmitter<Bug>();

    constructor(private bugOperations : BugOperationsService){

    }

    onAddNewClick(){
        this.bugOperations
            .createNew(this.newBugName)
            .subscribe(newBug =>  {
                this.created.emit(newBug);
            });
        
    }
}