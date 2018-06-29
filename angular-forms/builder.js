const shell = require('shelljs');

const logMessage = (scope, status) => {
  console.log(`Status: ${scope} Production Build: ${status}`);
};

const productionBuild = shell.exec('npm run prod', {
  async: true,
  silent: true
});

logMessage('ULMS', 'In progress..');
productionBuild.on('exit', (event) => {
  if (!!event) {
    logMessage('ULMS', 'Error!');
    return;
  }
  logMessage('ULMS', 'Success Done!');
});


