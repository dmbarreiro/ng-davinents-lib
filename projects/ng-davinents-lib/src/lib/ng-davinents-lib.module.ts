import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FaInputComponent } from "./fa-input/fa-input.component";
import { InputReferenceDirective } from "./common/input-reference.directive";
import { MdInputComponent } from "./md-input/md-input.component";
import { HoldButtonComponent } from "./hold-button/hold-button.component";
import { HoldableDirective } from "./common/holdable.directive";
import { TabContainerComponent } from "./dvts-tab-container/dvts-tab-container.component";
import { TabComponent } from "./dvts-tab/dvts-tab.component";

@NgModule({
  declarations: [
    FaInputComponent,
    HoldableDirective,
    HoldButtonComponent,
    InputReferenceDirective,
    MdInputComponent,
    TabContainerComponent,
    TabComponent,
  ],
  imports: [
    CommonModule // Common structural directives like ngIf, ngFor and more
  ],
  exports: [
    FaInputComponent,
    HoldableDirective,
    HoldButtonComponent,
    InputReferenceDirective,
    MdInputComponent
  ]
})
export class NgDavinentsLibModule { }
