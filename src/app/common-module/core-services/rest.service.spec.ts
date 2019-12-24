import { TestBed } from '@angular/core/testing';

import { RestService } from './rest.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RestService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [RestService],
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: any = TestBed.get(RestService);
    expect(service).toBeTruthy();
  });
});
