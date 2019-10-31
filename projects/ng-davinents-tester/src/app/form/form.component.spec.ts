import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement } from "@angular/core";

import { FormComponent } from "./form.component";
import { FaInputComponent } from "@ng-davinents-lib/fa-input/fa-input.component";
import { MdInputComponent } from "@ng-davinents-lib/md-input/md-input.component";
import { HoldButtonComponent } from "@ng-davinents-lib/hold-button/hold-button.component";

describe("FormComponent", () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let el: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormComponent,
        FaInputComponent,
        MdInputComponent,
        HoldButtonComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render title in a h1 tag", () => {
    expect(el.nativeElement.querySelector("h1").textContent).toContain("Default input");
  });
});
