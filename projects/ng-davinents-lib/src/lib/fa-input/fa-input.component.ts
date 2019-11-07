import { Component, Input, ContentChild, AfterContentInit, HostBinding } from "@angular/core";

import { InputReferenceDirective } from "../common/input-reference.directive";

@Component({
  selector: "dvts-fa-input",
  templateUrl: "./fa-input.component.html",
  styleUrls: ["./fa-input.component.scss"]
})
export class FaInputComponent implements AfterContentInit {
  @Input()
  icon: string;

  @ContentChild(InputReferenceDirective, {static: false})
  input: InputReferenceDirective;

  constructor() { }

  ngAfterContentInit() {
    let error_message: string;
    if (!this.input) {
      error_message = "dvts-fa-input needs to receive an HTML input inside its content";
      console.error(error_message);
      throw new Error(error_message);
    }
    if (!this.icon) {
      error_message = "dvts-fa-input needs to receive icon property containing the font-awesome icon name. (Ex: icon=\"envelope\")";
      console.error(error_message);
      throw new Error(error_message);
    }
  }

  @HostBinding("class.input-focus")
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {};

    if (this.icon) {
      const iconClass = "fa-" + this.icon;
      cssClasses[iconClass] = true;
    }

    return cssClasses;
  }

}
