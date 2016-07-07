import React from 'react'
import { Navigation } from '../components/navigation.js'

export const App = ({ children }) => (
  <div>
    <Navigation />
    { children }
  </div>
)
