import { ToLocalTimeSpanPipe } from './to-local-time-span.pipe';

describe('ToLocalTimeSpanPipe', () => {
    it('create an instance', () => {
        const pipe = new ToLocalTimeSpanPipe();
        expect(pipe).toBeTruthy();
    });
});
