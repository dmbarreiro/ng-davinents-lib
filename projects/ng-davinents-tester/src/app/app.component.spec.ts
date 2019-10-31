import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from "./app.component";

describe("AppComponent", () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({ // Setting up Angular testing module
      imports: [
        RouterTestingModule
      ],
      declarations: [ AppComponent ],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  }));

  it("should create the app", () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ng-davinents-tester'`, () => {
    expect(component.title).toEqual("ng-davinents-tester");
  });

});
