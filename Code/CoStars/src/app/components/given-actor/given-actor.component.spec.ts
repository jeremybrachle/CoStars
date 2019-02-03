import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GivenActorComponent } from './given-actor.component';

describe('GivenActorComponent', () => {
  let component: GivenActorComponent;
  let fixture: ComponentFixture<GivenActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivenActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivenActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
