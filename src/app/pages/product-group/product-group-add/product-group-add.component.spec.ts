import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGroupAddComponent } from './product-group-add.component';

describe('ProductGroupAddComponent', () => {
  let component: ProductGroupAddComponent;
  let fixture: ComponentFixture<ProductGroupAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGroupAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGroupAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
