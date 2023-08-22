const { join } = require('path');
const telescope = require('@cosmology/telescope').default;
const rimraf = require('rimraf').rimrafSync;
const TELESCOPE_CONFIG = require('../.telescope.json');
const outPath = join(TELESCOPE_CONFIG.outPath);
rimraf(outPath);

telescope(TELESCOPE_CONFIG)
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
