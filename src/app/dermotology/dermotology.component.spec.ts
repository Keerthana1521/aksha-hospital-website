import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DermotologyComponent } from './dermotology.component';

describe('DermotologyComponent', () => {
  let component: DermotologyComponent;
  let fixture: ComponentFixture<DermotologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DermotologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DermotologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
