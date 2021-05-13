import { NgModule } from "@angular/core";
import { ElapsedPipe } from "./pipes/elapsed.pipe";
import { SortPipe } from "./pipes/sort.pipe";
import { TrimTextPipe } from "./pipes/trimText.pipe";

@NgModule({
    declarations : [
        ElapsedPipe,
        SortPipe,
        TrimTextPipe,
    ],
    providers : [],
    imports : [],
    bootstrap : [],
    exports : [
        ElapsedPipe,
        SortPipe,
        TrimTextPipe
    ]
})
export class UtilsModule{
    
}