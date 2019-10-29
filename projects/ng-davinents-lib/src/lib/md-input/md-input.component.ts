import { Component, Input, AfterContentInit, ContentChild, HostBinding } from "@angular/core";

import { InputReferenceDirective } from "../common/input-reference.directive";

@Component({
  selector: "dvts-md-input [icon]",
  templateUrl: "./md-input.component.html",
  styleUrls: ["./md-input.component.scss"]
})
export class MdInputComponent implements AfterContentInit {
  @Input()
  icon: string;

  @ContentChild(InputReferenceDirective, {static: false})
  input: InputReferenceDirective;

  constructor() { }

  ngAfterContentInit() {
    if (!this.input) {
      console.error("dvts-md-input needs to receive an HTML input inside its content.");
    }
    if (!this.icon) {
      console.error("dvts-md-input needs to receive icon property containing the material icon name. (Ex: icon=\"search\")");
    }
  }

  @HostBinding("class.input-focus")
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

}
