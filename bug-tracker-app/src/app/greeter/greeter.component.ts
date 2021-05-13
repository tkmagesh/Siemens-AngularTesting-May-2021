import { Component } from "@angular/core";

@Component({
    selector : 'app-greeter',
    templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
    username : string = '';
    greetMsg : string = '';
    
    constructor(){

    }
    onBtnGreetClick(){
        this.greetMsg = `Hi ${this.username}, Have a nice day!`
    }
}