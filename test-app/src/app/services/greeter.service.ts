import { TimeService } from './time.service';
import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn :'root'
})
export class GreeterService{
    constructor(private timeService : TimeService, private logger : LoggerService){

    }
    greet(name : string) : string {
        //const currentDate = new Date()
        const currentDate = this.timeService.getCurrent()
        this.logger.log(`user ${name} greeted`);
        if (currentDate.getHours() < 12){
            return `Hi ${name}, Good Morning!`
        } else {
            return `Hi ${name}, Good Day!`
        }
    }
}