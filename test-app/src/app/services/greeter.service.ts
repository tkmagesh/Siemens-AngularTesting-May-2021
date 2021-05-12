import { TimeService } from './time.service';

export class GreeterService{
    constructor(private timeService : TimeService){

    }
    greet(name : string) : string {
        const currentDate = this.timeService.getCurrent()
        if (currentDate.getHours() < 12){
            return `Hi ${name}, Good Morning!`
        } else {
            return `Hi ${name}, Good Day!`
        }
    }
}