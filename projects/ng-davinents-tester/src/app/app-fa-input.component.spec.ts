import { DebugElement } from "@angular/core";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";
import { FaInputComponent } from "@ng-davinents-lib/fa-input/fa-input.component";
import { MdInputComponent } from "@ng-davinents-lib/md-input/md-input.component";

describe("AppComponent - FA Input", () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let emailField: Element;


  beforeEach(async(() => {
    TestBed.configureTestingModule({ // Setting up Angular testing module
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        FaInputComponent,
        MdInputComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    emailField = el.nativeElement.querySelector("#fa-email-field");
    fixture.detectChanges();
  }));

  it("should create a font awesome email input", () => {
    expect(emailField).toBeTruthy();
  });

  it("should include correct email icon inside font awesome email input", () => {
    expect(emailField.querySelector("i.icon.fa.fa-envelope")).toBeTruthy();
  });

  it("should have projected correct test input inside font awesome email input", () => {
    expect(emailField.querySelector("input.test-class")).toBeTruthy();
  });
});
