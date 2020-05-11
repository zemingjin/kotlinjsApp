if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'KotlinJsApp'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinJsApp'.");
}var KotlinJsApp = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    println('Hello JavaScript');
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('KotlinJsApp', _);
  return _;
}(typeof KotlinJsApp === 'undefined' ? {} : KotlinJsApp, kotlin);
