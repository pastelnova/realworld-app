import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';

import { ErrorService } from '../../errors/service/error.service';

describe('ErrorService', () => {
  let errorService: ErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
    });
    errorService = TestBed.inject(ErrorService);
  });

  it('should be created', () => {
    expect(errorService).toBeTruthy();
  });
});
