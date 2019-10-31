import { DebugElement } from "@angular/core";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { FormComponent } from "./form.component";
import { FaInputComponent } from "../../../../ng-davinents-lib/src/lib/fa-input/fa-input.component";
import { MdInputComponent } from "../../../../ng-davinents-lib/src/lib/md-input/md-input.component";
import { HoldButtonComponent } from "../../../../ng-davinents-lib/src/lib/hold-button/hold-button.component";

describe("FormComponent - MD Input", () => {

  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let el: DebugElement;
  let emailField: Element;


  beforeEach(async(() => {
    TestBed.configureTestingModule({ // Setting up Angular testing module
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FormComponent,
        FaInputComponent,
        MdInputComponent,
        HoldButtonComponent
      ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.debugElement.componentInstance;
    el = fixture.debugElement;
    emailField = el.nativeElement.querySelector("#md-search-field");
    fixture.detectChanges();
  }));

  it("should create a material search input", () => {
    expect(emailField).toBeTruthy();
  });

  it("should include correct CSS classes inside material search input", () => {
    expect(emailField.querySelector("i.icon.material-icons")).toBeTruthy();
  });

  it("should include correct search icon inside material search input", () => {
    expect(emailField.querySelector("i.icon.material-icons").innerHTML).toContain("search");
  });

  it("should have projected correct test input inside material search input", () => {
    expect(emailField.querySelector("input.test-class")).toBeTruthy();
  });
});
