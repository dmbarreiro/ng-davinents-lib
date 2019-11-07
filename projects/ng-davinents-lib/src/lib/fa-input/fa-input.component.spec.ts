import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DebugElement, Component } from "@angular/core";
import { By } from "@angular/platform-browser";

import { FaInputComponent } from "./fa-input.component";
import { NgDavinentsLibModule } from "@ng-davinents-lib/ng-davinents-lib.module";

@Component({
  selector: "projection-test-component",
  template: `
  <dvts-fa-input class="custom-input" id="fa-email-field" name="test-1">
    <input type="email" name="email" placeholder="E-mail" class="test-class">
  </dvts-fa-input>
  `
})
class ProjectionTestComponent {}

fdescribe("FaInputComponent", () => {
  let no_projection_component: FaInputComponent;
  let projection_component: ProjectionTestComponent;
  let  no_projection_fixture: ComponentFixture<FaInputComponent>;
  let projection_fixture: ComponentFixture<ProjectionTestComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectionTestComponent ],
      imports: [ NgDavinentsLibModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    projection_fixture = TestBed.createComponent(ProjectionTestComponent);
    projection_component = projection_fixture.componentInstance;
    debugElement =  projection_fixture.debugElement;
    // projection_fixture.detectChanges(); // No icon defined, this would throw an error
  });

  it("should create", () => {
    expect(projection_component).toBeTruthy();
  });

  it("should create only one element wiht specified fa css class", () => {
    const fa_input_icon_instance = debugElement.query(By.css("i")).componentInstance;
    fa_input_icon_instance.icon = "lock";
    projection_fixture.detectChanges();
    const fa_input_icons = debugElement.queryAll(By.css(".fa-lock"));
    expect(fa_input_icons.length).toBe(1);
  });

  it("should create an <i> element wiht specified fa css class", () => {
    const fa_input_icon_instance = debugElement.query(By.css("i")).componentInstance;
    fa_input_icon_instance.icon = "lock";
    projection_fixture.detectChanges();
    const fa_input_icon = debugElement.query(By.css("i"));
    expect(fa_input_icon.classes["fa-lock"]).toBe(true);
  });

  it("created <i> element wiht specified style classes", () => {
    const fa_input_icon_instance = debugElement.query(By.css("i")).componentInstance;
    fa_input_icon_instance.icon = "lock";
    projection_fixture.detectChanges();
    const fa_input_icon = debugElement.query(By.css("i"));
    expect(fa_input_icon.classes).toEqual(jasmine.objectContaining({ fa: true, icon: true}));
  });

  it("throws when instantiated without a projected input element", () => {
    no_projection_fixture = TestBed.createComponent(FaInputComponent);
    no_projection_component =  no_projection_fixture.componentInstance;
    expect(() => {
      no_projection_fixture.detectChanges();
    }).toThrowError("dvts-fa-input needs to receive an HTML input inside its content");
  });

  it("throws when instantiated without an icon property defined ", () => {
    expect(() => {
      projection_fixture.detectChanges();
    }).toThrowError("dvts-fa-input needs to receive icon property containing the font-awesome icon name. (Ex: icon=\"envelope\")");
  });
});
