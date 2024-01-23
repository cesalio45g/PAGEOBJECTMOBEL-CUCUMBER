//    Multiple Cucumber HTML Reporter: 'https://www.npmjs.com/package/multiple-cucumber-html-reporter',
//      Video Tutorial: (50:50) https://www.youtube.com/watch?v=Dc0zyn2n6RQ&t=2916s
const report = require('multiple-cucumber-html-reporter');

report.generate({
   jsonDir: './cypress/cucumber-json/',
   reportPath: './cypress/cucumber-report/',
   metadata: {
      browser: {
         name: 'chrome',
         version: '120.0.6099.216',
      },
      device: 'macOS Personal Computer',
      platform: {
         name: 'Catalina',
         version: '10.15.7',
      },
   },
});
