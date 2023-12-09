import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsdetailComponent } from './solutionsdetail.component';

describe('SolutionsdetailComponent', () => {
  let component: SolutionsdetailComponent;
  let fixture: ComponentFixture<SolutionsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
