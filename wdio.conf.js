import path from "pathe";

export const config = {
    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:udid': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:app': './Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
        'appium:appWaitActivity': '*',
        'appium:newCommandTimeout': 300,
        'appium:uiautomator2ServerLaunchTimeout': 60000,
        'appium:androidInstallTimeout': 120000,
        'appium:appWaitDuration': 60000,
        'appium:autoGrantPermissions': true
    }],
    framework: 'mocha',
    specs: ['./test/specs/**/*.js'],
    exclude:[],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
    reporters: ['spec'],
    logLevel: 'info',
    services: ['appium'],
};