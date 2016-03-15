#!/usr/bin/env node
'use strict'
const program = require('commander')
const updateNotifier = require('update-notifier')
const pkg = require('./package')
const watch = require('./commands/watch')
const build = require('./commands/build')
const init = require('./commands/init')

updateNotifier({ pkg }).notify()

program.version(pkg.version)

program
  .command('watch')
  .description('hot reloading mode')
  .option('-e, --entry [webpackEntry]', 'Set webpack entry')
  .option('-p, --port [serverPort]', 'Change port of server')
  .option('--bs, --browser-sync [port]', 'Toggle browserSync')
  .option('-s, --silent', 'Do not open browser window')
  .option('-u, --use [usePresetsFor]', 'Use presets for React or Vue or the default config')
  .option('--ai, --auto-install', 'Automatically install missing dependencies when editing')
  .option('--title [htmlTitle]', 'Set title for output html')
  .option('--umd <libraryName>', 'UMD format')
  .option('--cjs', 'CommonJS format')
  .option('-t, --target [webpackTarget]', 'Set webpack target')
  .option('--cssnext', 'Use cssnext')
  .option('--cssmodules', 'Use css-modules')
  .option('-c, --config', 'Custom tooling config file')
  .action(watch)

program
  .command('build')
  .description('build mode')
  .option('-e, --entry [webpackEntry]', 'Set webpack entry"')
  .option('-u, --use [usePresetsFor]', 'Use presets for React or Vue')
  .option('--title [htmlTitle]', 'Set title for output html')
  .option('--umd <libraryName>', 'UMD format')
  .option('--cjs', 'CommonJS format')
  .option('-t, --target [webpackTarget]', 'Set webpack target')
  .option('-d, --dest [bundleDestDir]', 'Set bundled file dest directory')
  .option('--filename <bundleFileName>', 'Set bundled filename')
  .option('--disable-html', 'Do not include html-webpack-plugin')
  .option('--cssnext', 'Use cssnext')
  .option('--pretty', 'Do not compress bundled files')
  .option('--clean', 'Clean output path before bundle')
  .option('--cssmodules', 'Use css-modules')
  .option('-c, --config', 'Custom tooling config file')
  .action(build)

program
  .command('init [type]')
  .description('initial a tooling project')
  .action(init)

program.parse(process.argv)
