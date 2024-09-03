import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorStructureComponent } from './doctor-structure.component';

describe('DoctorStructureComponent', () => {
  let component: DoctorStructureComponent;
  let fixture: ComponentFixture<DoctorStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorStructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
