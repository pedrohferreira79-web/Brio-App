import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartografiaPage } from './cartografia.page';

describe('CartografiaPage', () => {
  let component: CartografiaPage;
  let fixture: ComponentFixture<CartografiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartografiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
