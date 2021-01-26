// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;
const excludedSpecs = [
'./app/movies/movie-item/movie-item.component.spec.ts',
'./app/movies/movie-modal/movie-modal.component.spec.ts',
];
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
debugger;
// And load the modules.
context.keys().filter(file => excludedSpecs.includes(file) === false).map(context);
