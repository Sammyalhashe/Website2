import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SammyComponent } from './sammy.component';

describe('SammyComponent', () => {
  let component: SammyComponent;
  let fixture: ComponentFixture<SammyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SammyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SammyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
