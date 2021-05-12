import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
    transform(value: string, maxLength : number = 30) {
        if (value.length < maxLength){
            return value;
        } else {
            return value.substr(0, maxLength) + '...';
        }
    }

}