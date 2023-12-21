import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewLazyComponent } from './over-view-lazy.component';

describe('OverViewLazyComponent', () => {
  let component: OverViewLazyComponent;
  let fixture: ComponentFixture<OverViewLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverViewLazyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverViewLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
