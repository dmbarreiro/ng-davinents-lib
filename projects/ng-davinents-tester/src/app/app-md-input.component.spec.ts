import { DebugElement } from "@angular/core";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";
import { FaInputComponent } from "../../../ng-davinents-lib/src/lib/fa-input/fa-input.component";
import { MdInputComponent } from "../../../ng-davinents-lib/src/lib/md-input/md-input.component";

describe("AppComponent - MD Input", () => {

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
