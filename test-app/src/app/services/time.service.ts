import { Injectable } from "@angular/core";

@Injectable({
    providedIn :'root'
})
export class TimeService{
    getCurrent() : Date {
        return new Date()
    }
}