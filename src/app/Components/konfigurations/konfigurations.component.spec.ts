import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonfigurationsComponent } from './konfigurations.component';

describe('KonfigurationsComponent', () => {
  let component: KonfigurationsComponent;
  let fixture: ComponentFixture<KonfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KonfigurationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KonfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
