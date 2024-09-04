import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPhysicianComponent } from './general-physician.component';

describe('GeneralPhysicianComponent', () => {
  let component: GeneralPhysicianComponent;
  let fixture: ComponentFixture<GeneralPhysicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralPhysicianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralPhysicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
