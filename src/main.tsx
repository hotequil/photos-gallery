import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Photos } from "./pages/Photos";
import { Photo } from "./pages/Photo";
import { Route, Routes, BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Photos />}/>
          <Route path="/:photoId" element={<Photo />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
