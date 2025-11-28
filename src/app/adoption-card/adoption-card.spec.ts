import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionCard } from './adoption-card';

describe('AdoptionCard', () => {
  let component: AdoptionCard;
  let fixture: ComponentFixture<AdoptionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdoptionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdoptionCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
