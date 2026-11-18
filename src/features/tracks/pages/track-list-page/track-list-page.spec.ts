import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListPage } from './track-list-page';

describe('TrackListPage', () => {
  let component: TrackListPage;
  let fixture: ComponentFixture<TrackListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackListPage],
    }).compileComponents();

    fixture = TestBed.createComponent(TrackListPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
