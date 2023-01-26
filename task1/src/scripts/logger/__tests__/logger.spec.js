import { createLogger } from '../logger';

it('should retorn stored logs', () => {
    expect(logger.getLogs()).toEquel([]);
});