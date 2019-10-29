import { Directive, Output, EventEmitter, HostListener } from "@angular/core";

import { Subject, Observable, interval } from "rxjs";
import { takeUntil, tap, filter } from "rxjs/operators";

@Directive({
  selector: "[holdable]"
})
export class HoldableDirective {
  @Output()
  holdTime: EventEmitter<number> = new EventEmitter();
  state: Subject<string> = new Subject();
  cancel: Observable<string>;

  constructor() {
    this.cancel = this.state
      .pipe(
        filter( value => {
          return value === "cancel";
        }),
        tap( value => {
          console.log("%c button hold stopped", "background-color: black; color: #ec6969; font-weight: bold;");
          this.holdTime.emit(0);
        })
      );
  }

  @HostListener("mouseleave", ["$event"])
  @HostListener("pan", ["$event"])
  @HostListener("pressup", ["$event"])
  onExit() {
    this.state.next("cancel");
  }

  // @HostListener("mousedown", ["$event"])
  @HostListener("press", ["$event"])
  onHold() {
    console.log("%c button hold started", "background-color: black; color: #5fba7d; font-weight: bold;");
    this.state.next("start");

    const interval_milisec = 100;

    interval(interval_milisec)
      .pipe(
        takeUntil(this.cancel),
        tap(( elapsed_intervals => {
          this.holdTime.emit(elapsed_intervals * interval_milisec);
        })),
      ).subscribe();
  }

}
