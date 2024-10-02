import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvsoulComponent } from './mvsoul.component';

describe('MvsoulComponent', () => {
  let component: MvsoulComponent;
  let fixture: ComponentFixture<MvsoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MvsoulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvsoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
