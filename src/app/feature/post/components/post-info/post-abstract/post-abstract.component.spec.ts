import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAbstractComponent } from './post-abstract.component';

describe('PostAbstractComponent', () => {
  let component: PostAbstractComponent;
  let fixture: ComponentFixture<PostAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAbstractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
