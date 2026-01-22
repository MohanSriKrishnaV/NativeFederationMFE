import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSubMenuComponent } from './orders-sub-menu.component';

describe('OrdersSubMenuComponent', () => {
  let component: OrdersSubMenuComponent;
  let fixture: ComponentFixture<OrdersSubMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OrdersSubMenuComponent]
    });
    fixture = TestBed.createComponent(OrdersSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
