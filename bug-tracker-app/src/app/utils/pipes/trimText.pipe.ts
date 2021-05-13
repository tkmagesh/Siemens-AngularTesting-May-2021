import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'trimText'
})
export class TrimTextPipe implements PipeTransform {
    transform(value: string, ...args: any[]) : string {
        return value.length <= 30 ? value : value.substring(0,30) + '...';
    }

}