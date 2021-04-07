import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancersDesignSystemComponent } from './enhancers-design-system.component';

describe('EnhancersDesignSystemComponent', () => {
  let component: EnhancersDesignSystemComponent;
  let fixture: ComponentFixture<EnhancersDesignSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnhancersDesignSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnhancersDesignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
