import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { NavigationComponent } from "./navigation.component";
import { TabComponent, TabContainerComponent } from "projects/ng-davinents-lib/src/public-api";

describe("NavigationComponent", () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavigationComponent,
        TabComponent,
        TabContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
