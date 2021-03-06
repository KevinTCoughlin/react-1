import { task, series } from 'gulp'

import sh from '../sh'
import config from '../../../config'

const { paths } = config

// ----------------------------------------
// Visual
// ----------------------------------------

task('screener:runner', cb => {
  // kill the server when done
  sh(`screener-runner --conf ${paths.base('screener.config.js')}`)
    .then(() => {
      cb()
      process.exit(0)
    })
    .catch(err => {
      cb(err)
      process.exit(1)
    })
})

// ----------------------------------------
// Default
// ----------------------------------------

task('screener', series('dll', 'build:docs', 'serve:docs', 'screener:runner'))
