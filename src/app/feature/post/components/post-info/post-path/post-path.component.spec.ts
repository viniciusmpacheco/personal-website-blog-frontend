import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPathComponent } from './post-path.component';

describe('PostPathComponent', () => {
  let component: PostPathComponent;
  let fixture: ComponentFixture<PostPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
