import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NabhComponent } from './nabh.component';

describe('NabhComponent', () => {
  let component: NabhComponent;
  let fixture: ComponentFixture<NabhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NabhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NabhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
