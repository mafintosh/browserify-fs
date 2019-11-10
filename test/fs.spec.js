'use strict';

/* eslint-env jest */

const fs = require('pify')(require('..'));

const buf = Buffer.from('Hello world!\n', 'utf-8');

test('create directory', async () => {
  await fs.mkdir('/home');
  const stats = await fs.stat('/home');
  expect(stats.isDirectory()).toBe(true);
});

test('write file', async () => {
  await fs.writeFile('/home/hello-world.txt', buf);
  const stats = await fs.stat('/home/hello-world.txt');
  expect(stats.isFile()).toBe(true);
  expect(stats.size).toBe(buf.byteLength);
});

test('read file', async () => {
  const content = await fs.readFile('/home/hello-world.txt');
  expect(content.equals(buf)).toBe(true);
});
