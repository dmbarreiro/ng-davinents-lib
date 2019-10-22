import { DebugElement } from "@angular/core";
import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";
import { FaInputComponent } from "@ng-davinents-lib/fa-input/fa-input.component";
import { MdInputComponent } from "@ng-davinents-lib/md-input/md-input.component";

describe("AppComponent", () => {

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
    emailField = el.nativeElement.querySelector("#email-field");
    fixture.detectChanges();
  }));

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ng-davinents-tester'`, () => {
    expect(component.title).toEqual("ng-davinents-tester");
  });

  it("should render title in a h1 tag", () => {
    expect(el.nativeElement.querySelector("h1").textContent).toContain("Default input");
  });

});
