import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInputComponentComponent } from './new-input-component.component';

describe('NewInputComponentComponent', () => {
  let component: NewInputComponentComponent;
  let fixture: ComponentFixture<NewInputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
