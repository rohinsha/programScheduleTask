import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramMetadataComponent } from './program-metadata.component';

describe('ProgramMetadataComponent', () => {
  let component: ProgramMetadataComponent;
  let fixture: ComponentFixture<ProgramMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
