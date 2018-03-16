import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountOpenCheckingComponent } from './account-open-checking.component';

describe('AccountOpenCheckingComponent', () => {
  let component: AccountOpenCheckingComponent;
  let fixture: ComponentFixture<AccountOpenCheckingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountOpenCheckingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOpenCheckingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
