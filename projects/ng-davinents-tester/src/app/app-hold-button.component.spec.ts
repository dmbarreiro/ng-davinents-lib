import { DebugElement } from "@angular/core";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";
import { FaInputComponent } from "../../../ng-davinents-lib/src/lib/fa-input/fa-input.component";
import { MdInputComponent } from "../../../ng-davinents-lib/src/lib/md-input/md-input.component";
import { HoldButtonComponent } from "../../../ng-davinents-lib/src/lib/hold-button/hold-button.component";

describe("AppComponent - Hold Button", () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let holdButton: Element;


  beforeEach(async(() => {
    TestBed.configureTestingModule({ // Setting up Angular testing module
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        FaInputComponent,
        MdInputComponent,
        HoldButtonComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    holdButton = el.nativeElement.querySelector("#hold-button-basic");
    fixture.detectChanges();
  }));

  it("should create a hold button", () => {
    expect(holdButton).toBeTruthy();
  });

  it("should include correct CSS classes in progress bar", () => {
    expect(holdButton.querySelector("div.progress-bar-container")).toBeTruthy();
    expect(holdButton.querySelector("div.progress-bar")).toBeTruthy();
  });

  it("should include correct CSS classes in hold link", () => {
    expect(holdButton.querySelector("a.holdable-inline")).toBeTruthy();
  });

  it("should have projected correct text inside hold button", () => {
    expect(holdButton.querySelector("a.holdable-inline").innerHTML).toContain("Hold to Trigger");
  });
});
