exports.config = {
  runner: 'local',
  port: 4723,
  specs: ['./test/specs/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'SM-N97OU',
    'appium:udid': '098903739R000019',
    'appium:platformVersion': '12',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'C:\\Users\\USER\\Documents\\swaglabs-mobile\\Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
    'appium:appPackage': 'com.swaglabsmobileapp',
    'appium:appActivity': 'com.swaglabsmobileapp.MainActivity',
    'appium:noReset': true
  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}