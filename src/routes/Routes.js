import React from 'react'
import {Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Apresentacao from '../components/Apresentacao';
import Aulas from '../components/Aulas';
import Aula from '../components/Aula';
import Sobre from '../components/Sobre';

import PrivateRoute from '../components/PrivateRoute'; //importando PrivateRoute que é um componente que restringe o acesso a uma página.
import AcessoNegado from '../components/AcessoNegado';

export default function MainRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />{/* "path" é o caminho que o usuário irá digitar para acessar a página. "element" é o componente que será renderizado. */}
          <Route path="/apresentacao" element={<Apresentacao />} />
          <Route path="/aulas" element={<PrivateRoute><Aulas /></PrivateRoute>}> {/* PrivateRoute tem que ficar no atributo "element" para que o componente seja renderizado. Não pode ficar no lugar do Route. */}
            <Route path="/aulas/:slug" element={<Aula />} />
          </Route>
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/acesso-negado" element={<AcessoNegado />} />
          <Route path="*" element={<div>Página não encontrada</div>} /> {/* "*" é um caminho que não existe. */}
        </Routes>
    )
}
