import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByDobComponent } from './sort-by-dob.component';

describe('SortByDobComponent', () => {
  let component: SortByDobComponent;
  let fixture: ComponentFixture<SortByDobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByDobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByDobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
