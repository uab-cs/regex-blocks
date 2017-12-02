import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrBlockComponent } from './or-block.component';

describe('OrBlockComponent', () => {
  let component: OrBlockComponent;
  let fixture: ComponentFixture<OrBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
