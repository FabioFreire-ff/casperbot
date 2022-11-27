import './App.css';
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Admin from "./pages/admin"
import Home from "./pages/home";
import NoticiasEntretenimento from "./pages/pagEntretenimento"
import NoticiasEsportes from "./pages/pagEsportes"
import NoticiasFamosos from "./pages/pagFamosos"
import NoticiasPolitica from "./pages/pagPolitica"
import ProtectedRoutes from "./protectedRoutes";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route element={<Admin />} path="/" exact />
              <Route element={<ProtectedRoutes />}>
                  <Route element={<Home />} path="/home" />
                  <Route element={<NoticiasEntretenimento />} path="/entretenimento" />
                  <Route element={<NoticiasEsportes />} path="/esportes" />
                  <Route element={<NoticiasFamosos />} path="/famosos" />
                  <Route element={<NoticiasPolitica />} path="/politica" />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}


export default App;
