import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVentaComponent } from './create-venta.component';

describe('CreateVentaComponent', () => {
  let component: CreateVentaComponent;
  let fixture: ComponentFixture<CreateVentaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVentaComponent]
    });
    fixture = TestBed.createComponent(CreateVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
