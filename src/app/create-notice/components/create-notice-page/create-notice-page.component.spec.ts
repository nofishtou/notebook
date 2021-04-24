import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoticePageComponent } from './create-notice-page.component';

describe('CreateNoticePageComponent', () => {
  let component: CreateNoticePageComponent;
  let fixture: ComponentFixture<CreateNoticePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNoticePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNoticePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
