import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnesthesiaComponent } from './anesthesia.component';

describe('AnesthesiaComponent', () => {
  let component: AnesthesiaComponent;
  let fixture: ComponentFixture<AnesthesiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnesthesiaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnesthesiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
