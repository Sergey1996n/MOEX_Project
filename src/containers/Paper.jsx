import React, { useState, useEffect } from "react"
import styled from "styled-components"
import api from '../api'
import Spinner from "../components/Spinner"
import TablePaper from "../components/TablePaper"

const H1 = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  color: '#1A1B29';
  margin-top: 40px;
  text-align: center;
`

export default function Paper({params}) {
    const [paper, setPaper] = useState(null)

  useEffect(() => {
      api.getPaper(params.secid).then((data) => {
        setPaper(data.description.data)
      })
    }, [])

  if (!paper) {
    return <Spinner margin="70px auto"/>
  }

  return (
    <>
      <H1>Карточка ценной бумаги</H1>
      <TablePaper
        paper = {paper}
        params = {params.secid}
      />
    </>
  )
}