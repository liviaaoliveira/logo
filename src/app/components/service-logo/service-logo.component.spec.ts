import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLogoComponent } from './service-logo.component';

describe('ServiceLogoComponent', () => {
  let component: ServiceLogoComponent;
  let fixture: ComponentFixture<ServiceLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceLogoComponent]
    });
    fixture = TestBed.createComponent(ServiceLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
