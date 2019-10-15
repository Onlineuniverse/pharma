import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorQuotationsComponent } from './distributor-quotations.component';

describe('DistributorQuotationsComponent', () => {
  let component: DistributorQuotationsComponent;
  let fixture: ComponentFixture<DistributorQuotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorQuotationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
