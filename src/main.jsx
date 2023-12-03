import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import * as serviceWorker from './utils/serviceWorker.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

serviceWorker.unregister()