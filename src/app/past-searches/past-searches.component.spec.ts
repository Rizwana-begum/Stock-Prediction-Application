import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSearchesComponent } from './past-searches.component';

describe('PastSearchesComponent', () => {
  let component: PastSearchesComponent;
  let fixture: ComponentFixture<PastSearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastSearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
