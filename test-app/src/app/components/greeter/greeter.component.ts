import { Component } from "@angular/core";
import { GreeterService } from '../../services/greeter.service';

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
    username : string = '';
    greetMsg : string = '';

    constructor(private greeterService : GreeterService){

    }
    onBtnGreetClick(){
        this.greetMsg = this.greeterService.greet(this.username)
    }
}