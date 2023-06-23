import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiErrorsComponent } from './api-errors.component';

describe('ApiErrorsComponent', () => {
  let component: ApiErrorsComponent;
  let fixture: ComponentFixture<ApiErrorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApiErrorsComponent]
    });
    fixture = TestBed.createComponent(ApiErrorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
