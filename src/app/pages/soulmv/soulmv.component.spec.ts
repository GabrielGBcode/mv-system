import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulmvComponent } from './soulmv.component';

describe('SoulmvComponent', () => {
  let component: SoulmvComponent;
  let fixture: ComponentFixture<SoulmvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoulmvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoulmvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
