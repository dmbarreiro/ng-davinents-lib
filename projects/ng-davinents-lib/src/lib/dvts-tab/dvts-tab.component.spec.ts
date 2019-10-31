import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvtsTabComponent } from './dvts-tab.component';

describe('DvtsTabComponent', () => {
  let component: DvtsTabComponent;
  let fixture: ComponentFixture<DvtsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvtsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvtsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
