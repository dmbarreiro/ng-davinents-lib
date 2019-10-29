import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "dvts-hold-button",
  templateUrl: "./hold-button.component.html",
  styleUrls: ["./hold-button.component.scss"]
})
export class HoldButtonComponent {
  private time_to_complete_milisec = 1000;
  complete_percentage = 0;
  hold_time = 0;
  holding_button = false;

  @Input()
  set ttl_milisec(ttl_milisec: string) {
    if (ttl_milisec) {
      this.time_to_complete_milisec = parseInt(ttl_milisec, 10);
    }
  }

  @Output()
  trigger: EventEmitter<boolean> = new EventEmitter();

  constructor() { }



  holdHandler(event) {
    this.hold_time = event;
    const real_complete_percentage = event * 100 / this.time_to_complete_milisec;
    this.complete_percentage = real_complete_percentage <= 100 ? real_complete_percentage : 100;
    if (this.complete_percentage === 100) {
      this.trigger.emit(true);
    }
  }

}
