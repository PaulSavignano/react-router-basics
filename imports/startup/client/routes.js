import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { App } from '../../ui/layouts/app.js'
import { Index } from '../../ui/components/index.js'

import { One } from '../../ui/pages/one.js'
import { Two } from '../../ui/pages/two.js'
import { Hello } from '../../ui/pages/hello.js'
import { NotFound } from '../../ui/pages/not-found.js'

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/one" component={ One } />
        <Route path="/two" component={ Two } />
        <Route path="/hello/:name" component={ Hello } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root')
  )
})
