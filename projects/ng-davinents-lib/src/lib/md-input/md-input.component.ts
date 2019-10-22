import { Component, Input, AfterContentInit, ContentChild, HostBinding } from "@angular/core";

import { InputReferenceDirective } from "../common/input-reference.directive";

@Component({
  selector: "dvts-md-input",
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
      console.error("app-md-input needs to receive an HTML input inside its content.")
    }
  }

  @HostBinding("class.input-focus")
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

}
