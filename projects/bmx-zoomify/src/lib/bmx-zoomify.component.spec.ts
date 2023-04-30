import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmxZoomifyComponent } from './bmx-zoomify.component';

describe('BmxZoomifyComponent', () => {
  let component: BmxZoomifyComponent;
  let fixture: ComponentFixture<BmxZoomifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmxZoomifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmxZoomifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
