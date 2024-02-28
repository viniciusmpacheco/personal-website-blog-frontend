import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRelatedsComponent } from './post-relateds.component';

describe('PostRelatedsComponent', () => {
  let component: PostRelatedsComponent;
  let fixture: ComponentFixture<PostRelatedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostRelatedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostRelatedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
