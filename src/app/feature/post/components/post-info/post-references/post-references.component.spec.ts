import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostReferencesComponent } from './post-references.component';

describe('PostReferencesComponent', () => {
  let component: PostReferencesComponent;
  let fixture: ComponentFixture<PostReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostReferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
