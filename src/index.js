import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import '@/assets/css/reset.less'
import store from '@/store/index'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)