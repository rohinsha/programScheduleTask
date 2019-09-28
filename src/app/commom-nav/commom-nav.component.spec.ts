import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommomNavComponent } from './commom-nav.component';

describe('CommomNavComponent', () => {
  let component: CommomNavComponent;
  let fixture: ComponentFixture<CommomNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommomNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommomNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
