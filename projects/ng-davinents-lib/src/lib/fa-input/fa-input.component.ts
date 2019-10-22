import { Component, OnInit, Input, ContentChild, AfterContentInit, HostBinding } from "@angular/core";

import { InputReferenceDirective } from "../common/input-reference.directive";

@Component({
  selector: "dvts-fa-input [icon]",
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
    if (!this.input) {
      console.error("app-fa-input needs to receive an HTML input inside its content.");
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
