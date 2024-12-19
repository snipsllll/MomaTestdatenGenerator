import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonfigInputComponent } from './konfig-input.component';

describe('KonfigInputComponent', () => {
  let component: KonfigInputComponent;
  let fixture: ComponentFixture<KonfigInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonfigInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonfigInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
