import QUnit from 'steal-qunit';
import plugin from './can-define-lazy-value';

QUnit.module('can-define-lazy-value');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the can-define-lazy-value plugin');
});
