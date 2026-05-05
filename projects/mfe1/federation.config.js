const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mfe1',

  exposes: {
    './Component': './projects/mfe1/src/app/app.component.ts',
      './NotificationService': 'projects/mfe1/src/app/services/notification.service.ts',
  },

  shared: {
    // Core Angular packages
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },

    // Only share specific Material modules used in mfe1
    '@angular/material/button': { singleton: true },
    '@angular/material/icon': { singleton: true },
    '@angular/material/card': { singleton: true },
    '@angular/material/divider': { singleton: true },

    // CDK dependencies
    '@angular/cdk/platform': { singleton: true },

    // RxJS (selective sharing)
    'rxjs': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'rxjs/operators': { singleton: true, strictVersion: true, requiredVersion: 'auto' },

    // Shared libraries
    'shared-ui': { singleton: true },
    'shared-events': { singleton: true },
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Skip unused Material modules
    '@angular/material/*',
    // Add further packages you don't need at runtime
  ]

});
