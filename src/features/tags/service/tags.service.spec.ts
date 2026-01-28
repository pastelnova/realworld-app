import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { TagsService } from './tags.service';

describe('TagsService', () => {
  let tagsService: TagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
    });
    tagsService = TestBed.inject(TagsService);
  });

  it('should be created', () => {
    expect(tagsService).toBeTruthy();
  });
});
