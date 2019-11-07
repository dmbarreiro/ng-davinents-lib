import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FaInputComponent } from "./fa-input.component";
import { NgDavinentsLibModule } from "@ng-davinents-lib/ng-davinents-lib.module";

fdescribe("FaInputComponent", () => {
  let component: FaInputComponent;
  let fixture: ComponentFixture<FaInputComponent>;

  beforeEach(async(() => {
    // TestBed.configureTestingModule({
    //   declarations: [ FaInputComponent ],
    //   imports: [ NgDavinentsLibModule ]
    // })
    // .compileComponents();
    TestBed.configureTestingModule({
      imports: [ NgDavinentsLibModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
