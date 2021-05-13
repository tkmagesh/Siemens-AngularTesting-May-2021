import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Bug } from "../models/bug";
import { BugApiService } from "./bugApi.service";
import { BugStorageService } from "./bugStorage.service";

@Injectable({
    providedIn :'root'
})
export class BugOperationsService{

    constructor(private bugApi : BugApiService){

    }

    createNew(bugName : string) : Observable<Bug> {
         const newBug : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return this.bugApi.save(newBug);
    }

    toggle(bugToToggle : Bug) : Observable<Bug> {
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed };
        return this.bugApi.save(toggledBug);
    }

    remove(bugToRemove : Bug) : Observable<any> {
        return this.bugApi.remove(bugToRemove)
    }

    getAll() : Observable<Bug[]> {
        //return this.bugStorage.getAll();
        return this.bugApi.getAll();
    }
}

/* 
bugTrackerComponent -> bugOperations -> bugStorage
*/