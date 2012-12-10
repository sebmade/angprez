basePath = '';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'components/jquery/jquery.js',
  'app/scripts/vendor/angular.js',
  'app/scripts/*.js',
  'app/scripts/**/*.js',
  'app/views/*.html.js',
  'test/e2e/**/*.js'
];

// test results reporter to use
// possible values: dots || progress
reporter = 'progress';


// web server port
port = 8080;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

autoWatch = true;

browsers = ['Chrome'];

singleRun = false;

proxies = {
  '/': 'http://localhost:3501/'
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
