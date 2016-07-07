import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { Index } from '../../../ui/components/index.js'

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={ Index } />
    </Router>,
    document.getElementById('react-root')
  )
})
