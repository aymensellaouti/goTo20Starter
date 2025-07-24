import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildModelComponent } from './child-model.component';

describe('ChildModelComponent', () => {
  let component: ChildModelComponent;
  let fixture: ComponentFixture<ChildModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
