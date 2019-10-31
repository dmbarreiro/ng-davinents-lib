import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvtsTabContainerComponent } from './dvts-tab-container.component';

describe('DvtsTabContainerComponent', () => {
  let component: DvtsTabContainerComponent;
  let fixture: ComponentFixture<DvtsTabContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvtsTabContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvtsTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
