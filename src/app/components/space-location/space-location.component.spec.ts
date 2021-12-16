import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceLocationComponent } from './space-location.component';

describe('SpaceLocationComponent', () => {
  let component: SpaceLocationComponent;
  let fixture: ComponentFixture<SpaceLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
