import helloWorld from './index';
import { test, expect } from 'vitest';

test('should pass', () => {
	expect(helloWorld()).toBe('helloWorld');
});
