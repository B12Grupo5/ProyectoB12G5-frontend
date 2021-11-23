import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderiniComponent } from './headerini.component';

describe('HeaderiniComponent', () => {
  let component: HeaderiniComponent;
  let fixture: ComponentFixture<HeaderiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
