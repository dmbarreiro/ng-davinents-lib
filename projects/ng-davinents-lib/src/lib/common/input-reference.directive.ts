import { Directive, HostListener } from "@angular/core";

@Directive({
  // Applies to any input directive inside app-fa-input
  selector: "[dvts-fa-input input], [dvts-md-input input]"
})
export class InputReferenceDirective {
  focus = false;

  constructor() { }

  @HostListener("focus")
  onFocus() {
    this.focus = true;
  }

  @HostListener("blur")
  onBlur() {
    this.focus = false;
  }
}
