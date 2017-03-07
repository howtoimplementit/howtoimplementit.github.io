import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyIdeaComponent } from './modify-idea.component';

describe('ModifyIdeaComponent', () => {
  let component: ModifyIdeaComponent;
  let fixture: ComponentFixture<ModifyIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
