import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Commande from './assets/pages/Commande'
import Accueil from './assets/pages/accueil'
import Inscription from './assets/pages/inscription'
import Connexion from './assets/pages/connexion'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />}/>
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/commande" element={<Commande />} />
        </Routes>
    </BrowserRouter>
  )
}