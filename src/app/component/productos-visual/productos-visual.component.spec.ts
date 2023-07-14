import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosVisualComponent } from './productos-visual.component';

describe('ProductosVisualComponent', () => {
  let component: ProductosVisualComponent;
  let fixture: ComponentFixture<ProductosVisualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductosVisualComponent]
    });
    fixture = TestBed.createComponent(ProductosVisualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
