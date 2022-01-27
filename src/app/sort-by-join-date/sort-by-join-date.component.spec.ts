import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByJoinDateComponent } from './sort-by-join-date.component';

describe('SortByJoinDateComponent', () => {
  let component: SortByJoinDateComponent;
  let fixture: ComponentFixture<SortByJoinDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByJoinDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByJoinDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
