import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmIdeaComponent } from './confirm-idea.component';

describe('ConfirmIdeaComponent', () => {
  let component: ConfirmIdeaComponent;
  let fixture: ComponentFixture<ConfirmIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
