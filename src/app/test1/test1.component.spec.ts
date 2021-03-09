import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1Component } from './test1.component';

describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;
  let INPUT =
    'The quick brown fox jumped over the lazy dog for the fourth time over and over again';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Test1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should equal 14', () => {
    let foo = component.test1(INPUT);
    expect(component.test1(INPUT)).toEqual(14);
  });
});
