import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpepComponent } from './mvpep.component';

describe('MvpepComponent', () => {
  let component: MvpepComponent;
  let fixture: ComponentFixture<MvpepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MvpepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvpepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
