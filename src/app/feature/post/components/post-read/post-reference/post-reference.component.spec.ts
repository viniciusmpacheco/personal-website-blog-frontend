import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReferenceComponent } from './post-reference.component';

describe('PostReferenceComponent', () => {
  let component: PostReferenceComponent;
  let fixture: ComponentFixture<PostReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
