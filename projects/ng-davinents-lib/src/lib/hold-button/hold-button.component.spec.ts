import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HoldButtonComponent } from "./hold-button.component";

describe("HoldButtonComponent", () => {
  let component: HoldButtonComponent;
  let fixture: ComponentFixture<HoldButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
