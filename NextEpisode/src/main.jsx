import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { WatchlistProvider } from './context/WatchlistContext'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter enables routing throughout the application. */}
    <BrowserRouter>
      {/* WatchlistProvider shares watchlist state across all pages. */}
      <WatchlistProvider>
        <App />
      </WatchlistProvider>
    </BrowserRouter>
  </StrictMode>,
)