#!/usr/bin/env node
import { program } from 'commander';
import process from 'process';
import pageLoader from '../src/index.js';

program
  .version('1.0.0')
  .description('Page download')
  .arguments('<url>')
  .option('-o, --output [dirPath]', 'output directory', './')
  .action((url) => {
    // console.log(program);
    pageLoader(url, program.getOptionValue('output'))
      .then((outputDir) => console.log(outputDir))
      .catch(({ message }) => {
        console.error(message);
        process.exit(1);
      });
  })
  .parse(process.argv);
