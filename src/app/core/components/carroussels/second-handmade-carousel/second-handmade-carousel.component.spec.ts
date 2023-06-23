import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondHandmadeCarouselComponent } from './second-handmade-carousel.component';

describe('SecondHandmadeCarouselComponent', () => {
  let component: SecondHandmadeCarouselComponent;
  let fixture: ComponentFixture<SecondHandmadeCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondHandmadeCarouselComponent]
    });
    fixture = TestBed.createComponent(SecondHandmadeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
