import { Component } from "@angular/core";
import { GreeterService } from '../../services/greeter.service';
import * as moment from 'moment';

import { BugApiService } from "../../apiServices/bugApi.service";

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
    username : string = '';
    shortString : string = 'Culpa sit commodo consectetur';
    longString : string = 'Nulla labore voluptate nisi labore magna sit. Reprehenderit exercitation ex sunt eu adipisicing anim. Pariatur aute esse id fugiat excepteur occaecat labore reprehenderit sit ipsum. Ad mollit culpa esse mollit dolor commodo ex fugiat exercitation officia proident. Cillum ipsum consequat Lorem irure minim nisi aute velit do velit elit labore eu est. Veniam et sit aliqua in consequat adipisicing exercitation.'
    msgs : any[] = [
        {
            greetMsg : 'Magesh, Good Morning!',
            updatedTime : new Date('12-May-2021 9:00:00')
        },
        {
            greetMsg : 'Suresh, Good Morning!',
            updatedTime : new Date('12-May-2021 11:00:00')
        }
    ];
    greetMsg : string = '';
    updatedTime : Date;
    constructor(private greeterService : GreeterService, private bugApi : BugApiService){

    }
    onBtnGreetClick(){
        this.msgs.push({
            greetMsg : this.greeterService.greet(this.username),
            updatedTime : new Date()
        })
    }

    getFormattedDate(dt : Date) : string {
        console.log('getFormattedDate invoked');
        return moment(dt).fromNow()
    }

    onBtnGetBugsClick(){
        this.bugApi
            .getAll()
            .subscribe(bugs => console.table(bugs))
    }
}