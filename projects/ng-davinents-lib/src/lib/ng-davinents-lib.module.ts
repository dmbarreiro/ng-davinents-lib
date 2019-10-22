import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FaInputComponent } from "./fa-input/fa-input.component";
import { InputReferenceDirective } from "./common/input-reference.directive";
import { MdInputComponent } from "./md-input/md-input.component";

@NgModule({
  declarations: [
    FaInputComponent,
    InputReferenceDirective,
    MdInputComponent
  ],
  imports: [
    CommonModule // Common structural directives like ngIf, ngFor and more
  ],
  exports: [
    FaInputComponent,
    InputReferenceDirective,
    MdInputComponent
  ]
})
export class NgDavinentsLibModule { }
