import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpageComponent } from './openpage.component';

describe('OpenpageComponent', () => {
  let component: OpenpageComponent;
  let fixture: ComponentFixture<OpenpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
