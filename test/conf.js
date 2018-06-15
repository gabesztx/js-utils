exports.config = {

    //baseUrl: 'https://nexiuslearning.com',
    directConnect: true,
    
    // seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
    // seleniumAddress: 'http://localhost:4444/wd/hub',

    /*
    capabilities: {
        'browserstack.user': 'filip76',
        'browserstack.key': 'JyVJXUVAxq43DHHPFs6M',
        'browserName': 'internet explorer',
        'browserstack.debug': true,
        'browserstack.networkLogs': true,
        //'platform': 'WIN8',
        'version': 10
    },
    */

    
    capabilities: {
        // allows different specs to run in parallel.
        // If this is set to be true, specs will be sharded by file
        // (i.e. all files to be run by this set of capabilities will run in parallel).
        // Default is false.
        //shardTestFiles: true,
        
        // Maximum number of browser instances that can run in parallel for this
        // set of capabilities. This is only needed if shardTestFiles is true.
        // Default is 1.
        //maxInstances: 2, 
        browserName: 'chrome'
    },

    /*
    multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome'
    }, {
        'browserName': 'internet explorer'
    }],
    */

    specs: ['e2e/features/**/*.feature'],

    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    serenity: {
        dialect: 'cucumber',
        requirementsDirectory: 'features'
    },

    cucumberOpts: {
        require: ['e2e/features/**/*.ts'], // loads step definitions
        format: 'pretty',               // enable console output
        compiler: 'ts:ts-node/register'//,   // interpret step definitions as TypeScript
       // tags: '@focus'
    },

    allScriptsTimeout: 90000,

    onPrepare: function () {
        console.log('conf.js: onPrepare');
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
    },

    onComplete: function () {
        console.log('conf.js: onComplete');
    },

    onCleanUp: function () {
        console.log('conf.js: onCleanUp');
    },

    afterLaunch: function () {
        console.log('conf.js: afterLaunch');
    }
    
};