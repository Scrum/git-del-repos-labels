import test from 'ava';
import gitDelReposLabels from './index';

test('pkg is function', t => {
	t.is(typeof gitDelReposLabels, 'function');
});