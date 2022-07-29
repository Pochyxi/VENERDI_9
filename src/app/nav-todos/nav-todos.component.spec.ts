import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTodosComponent } from './nav-todos.component';

describe('NavTodosComponent', () => {
  let component: NavTodosComponent;
  let fixture: ComponentFixture<NavTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTodosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
