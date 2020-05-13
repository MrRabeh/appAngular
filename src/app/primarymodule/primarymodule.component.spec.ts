import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarymoduleComponent } from './primarymodule.component';

describe('PrimarymoduleComponent', () => {
  let component: PrimarymoduleComponent;
  let fixture: ComponentFixture<PrimarymoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarymoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarymoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
