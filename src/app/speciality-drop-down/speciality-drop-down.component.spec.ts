import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityDropDownComponent } from './speciality-drop-down.component';

describe('SpecialityDropDownComponent', () => {
  let component: SpecialityDropDownComponent;
  let fixture: ComponentFixture<SpecialityDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialityDropDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialityDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
