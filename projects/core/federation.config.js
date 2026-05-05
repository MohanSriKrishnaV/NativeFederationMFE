const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  shared: {
    // Core Angular packages
    '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    '@angular/forms': { singleton: true, strictVersion: true, requiredVersion: 'auto' },

    // Only share specific Material modules that are actually used
    '@angular/material/button': { singleton: true },
    '@angular/material/icon': { singleton: true },
    '@angular/material/card': { singleton: true },
    '@angular/material/input': { singleton: true },
    '@angular/material/form-field': { singleton: true },
    '@angular/material/toolbar': { singleton: true },
    '@angular/material/sidenav': { singleton: true },
    '@angular/material/list': { singleton: true },
    '@angular/material/divider': { singleton: true },
    '@angular/material/snack-bar': { singleton: true },

    // CDK dependencies for Material
    '@angular/cdk/overlay': { singleton: true },
    '@angular/cdk/platform': { singleton: true },

    // Animations
    '@angular/platform-browser/animations': { singleton: true },

    // RxJS (selective sharing)
    'rxjs': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'rxjs/operators': { singleton: true, strictVersion: true, requiredVersion: 'auto' },

    // Shared libraries
    'shared-ui': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'shared-auth': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
    'shared-events': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
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
