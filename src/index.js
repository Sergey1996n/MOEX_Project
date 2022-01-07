import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

import { Route } from "wouter"

import Header from "./components/Header"

import Indices from "./containers/Indices"

import ListPapers from "./containers/ListPapers"
import Paper from "./containers/Paper"
import 'bootstrap/dist/css/bootstrap.min.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

const HeaderContainer = styled.div`
  width: 100%;
  min-height: 80px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 1;
  background: linear-gradient(149deg, rgba(255,248,220,1) 0%, rgba(221,160,221,1) 42%, rgba(255,182,193,1) 72%, rgba(64,224,208,1) 100%);
  animation: gradient 10s infinite linear; // 10s - скорость анимации
  background-size: 400%; // Можно менять и подбирать интенсивность
  @keyframes gradient {
    0% {
      background-position: 80% 0%;
    }
    50% {
      background-position: 20% 100%;
    }
    100% {
      background-position: 80% 0%;
    }
  }
`

const Content = styled.div`
  width: 100%;
  background-color: #F8F9FB;
`

const App = () => (
  <Container>
    <HeaderContainer>
      <Header />
    </HeaderContainer>
    <Content>
      <Route path="/" component={ListPapers} />
      <Route path="/:secid" component={Paper} />
      <Route path="/:secid/indices" component={Indices} />
      <Route path="/:secid/aggregates" component={Indices} />
    </Content>
  </Container>
)

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)
