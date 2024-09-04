import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialitiesDesignComponent } from './specialities-design.component';

describe('SpecialitiesDesignComponent', () => {
  let component: SpecialitiesDesignComponent;
  let fixture: ComponentFixture<SpecialitiesDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialitiesDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialitiesDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
