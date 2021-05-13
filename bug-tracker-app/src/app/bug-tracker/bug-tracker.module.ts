import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { UtilsModule } from "../utils/utils.module";
import { BugTrackerComponent } from "./bug-tracker.component";
import { BugEditComponent } from "./components/bug-edit.component";
import { BugStatsComponent } from "./components/bug-stats.component";
import { ClosedCountPipe } from "./pipes/closedCount.pipe";

@NgModule({
    declarations : [
        BugTrackerComponent,
        BugEditComponent,
        BugStatsComponent,
        ClosedCountPipe
    ],
    imports : [
        UtilsModule,
        HttpClientModule,
        CommonModule
    ],
    exports : [
        BugTrackerComponent,
        BugEditComponent,
        BugStatsComponent
    ]
})
export class BugTrackerModule{

}