import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupEditComponent } from './product-group-edit.component';

describe('ProductGroupEditComponent', () => {
  let component: ProductGroupEditComponent;
  let fixture: ComponentFixture<ProductGroupEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
