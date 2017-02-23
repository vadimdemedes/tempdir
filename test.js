import {statSync as stat} from 'fs';
import test from 'ava';
import tempdir from '.';

test('create a directory', async t => {
	const path = await tempdir();
	t.true(stat(path).isDirectory());
});

test('create a directory synchronously', t => {
	const path = tempdir.sync();
	t.true(stat(path).isDirectory());
});
