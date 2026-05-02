const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
 
 
    // '@angular/core': { singleton: true, strictVersion: true },
    // '@angular/common': { singleton: true, strictVersion: true },
    // '@angular/router': { singleton: true, strictVersion: true },

    // // 🔥 DO NOT share entire material
    // '@angular/material/snack-bar': { singleton: true },
    // '@angular/cdk/overlay': { singleton: true },
    // '@angular/platform-browser/animations': { singleton: true },


      'shared-ui': { singleton: true,strictVersion: true, requiredVersion: 'auto' },
      'shared-auth': { singleton: true,strictVersion: true, requiredVersion: 'auto' },
      'shared-events': { singleton: true,strictVersion: true, requiredVersion: 'auto' },
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]
  
});
