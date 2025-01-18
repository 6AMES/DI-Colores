import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsJpComponent } from './products-jp.component';

describe('ProductsJpComponent', () => {
  let component: ProductsJpComponent;
  let fixture: ComponentFixture<ProductsJpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsJpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsJpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
