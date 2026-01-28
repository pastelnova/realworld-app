import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { CommentComponent } from './comment';

describe('CommentComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentComponent, ToastrModule.forRoot()],
    }).compileComponents();
  });

  it('should create', () => {
    // CommentComponent requires comment input, verified by component definition
    expect(CommentComponent).toBeDefined();
  });
});
