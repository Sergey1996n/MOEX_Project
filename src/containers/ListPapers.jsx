import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Spinner from "../components/Spinner"

import api from '../api'
import Table from "../components/Table";

const Header = styled.div`
  margin: 20px auto 24px;
  text-align: center;
`

const H2 = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: '#1A1B29';
`

export default function ListPapers() {
    const [papers, setPapers] = useState(null)
    const [columns, setColumns] = useState(null)
    const [page, setPage] = useState(null)
    
    useEffect(() => {
      api.getPapers(0).then((data) => {
        setPage(1)
        setColumns(data.securities.columns)
        setPapers(data.securities.data)
      })
    }, [])

    if (!(papers && columns)) {
      return <Spinner margin="70px auto"/>
    }
  
    return (
      <>
        <Header>
          <H2>Список всех бумаг</H2>
        </Header>
        <Table
          papers = {papers}
          page = {page}
          setPage = {setPage}
          setPapers = {setPapers}
        />
      </>
    )
  }