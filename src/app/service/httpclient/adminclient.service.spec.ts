import {TestBed} from '@angular/core/testing';

import {AdminclientService} from './adminclient.service';

describe('AdminclientService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: AdminclientService = TestBed.get(AdminclientService);
        expect(service).toBeTruthy();
    });
});
