Package.describe({
  name: 'igoandtrace:methods-entries',
  version: '0.0.1',
  summary: '',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1');
  api.use('ecmascript');
  api.use('igoandtrace:trace-units-collection');
  api.mainModule('methods-entries.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('methods-entries');
  api.mainModule('methods-entries-tests.js');
});
