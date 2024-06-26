import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingCardComponent } from './floating-card.component';

describe('FloatingCardComponent', () => {
  let component: FloatingCardComponent;
  let fixture: ComponentFixture<FloatingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
