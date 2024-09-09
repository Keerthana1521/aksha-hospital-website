import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VascularSurgeryComponent } from './vascular-surgery.component';

describe('VascularSurgeryComponent', () => {
  let component: VascularSurgeryComponent;
  let fixture: ComponentFixture<VascularSurgeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VascularSurgeryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VascularSurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
