import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinbuttonComponent } from './coinbutton.component';

describe('CoinbuttonComponent', () => {
  let component: CoinbuttonComponent;
  let fixture: ComponentFixture<CoinbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoinbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoinbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
