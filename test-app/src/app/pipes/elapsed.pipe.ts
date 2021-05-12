/* 
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
@Pipe({
    name : 'elapsed'
})
export class ElapsedPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return moment(value).fromNow()
    }
}
 */

import { Inject, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'elapsed'
})
export class ElapsedPipe implements PipeTransform{
    constructor(@Inject('MOMENT') private moment : any) {

    }
    transform(value: any, ...args: any[]) {
        console.log('elapsedPipe.transform triggered')
        return this.moment(value).fromNow();
    }

}