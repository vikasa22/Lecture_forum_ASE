import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThreadsScreenComponent } from './create-threads-screen.component';

describe('CreateThreadsScreenComponent', () => {
  let component: CreateThreadsScreenComponent;
  let fixture: ComponentFixture<CreateThreadsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateThreadsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThreadsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
