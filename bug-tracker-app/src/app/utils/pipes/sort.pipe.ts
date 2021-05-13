import { Pipe, PipeTransform } from "@angular/core";

type Comparer = (item1: any, item2: any) => number;

@Pipe({
    name : 'sort',
    pure : true
})
export class SortPipe implements PipeTransform{
    private getDescComparer(comparer : Comparer) : Comparer{
        return function(item1: any, item2: any){
            return comparer(item1, item2) * -1;
        }
    }
    private getComparer(attrName : string, isDesc : boolean = false) : Comparer {
        const comparer = function(item1 : any, item2 : any) : number {
            if (item1[attrName] < item2[attrName]) return  -1;
            if (item1[attrName] > item2[attrName]) return 1;
            return 0;
        };
        if (isDesc) return this.getDescComparer(comparer);
        return comparer;
    }
    transform(list: any[], attrName: string, isDesc : boolean = false) : any[] {
        if (!list || !list.length || !attrName) return list;
        return list.sort(this.getComparer(attrName, isDesc));
    }

}