import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterViewerComponent } from './encounter-view/encounter-viewer.component';
import { EncounterContainerComponent } from './encounter-container/encounter-container.component';
import { EncounterViewerService } from './encounter-viewer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionControlComponent } from './display-controls/question-control.component';
import { FilePreviewComponent } from './display-controls/file-preview.component';
import { RemoteAnswerComponent } from './display-controls/remote-answer.component';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../shared.module';
var EncounterViewerModule = /** @class */ (function () {
    function EncounterViewerModule() {
    }
    EncounterViewerModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        EncounterViewerComponent,
                        EncounterContainerComponent,
                        QuestionControlComponent,
                        FilePreviewComponent,
                        RemoteAnswerComponent
                    ],
                    imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        CommonModule,
                        HttpModule,
                        SharedModule
                    ],
                    providers: [
                        EncounterViewerService,
                    ],
                    exports: [
                        EncounterContainerComponent,
                        HttpModule
                    ],
                },] },
    ];
    /** @nocollapse */
    EncounterViewerModule.ctorParameters = function () { return []; };
    return EncounterViewerModule;
}());
export { EncounterViewerModule };
//# sourceMappingURL=encounter-viewer.module.js.map