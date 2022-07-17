import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { Photos } from "./pages/Photos";
import { Photo } from "./pages/Photo";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Photos />}/>
          <Route path="/photos/:photoId" element={<Photo />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
