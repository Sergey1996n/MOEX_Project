import React from "react"
import styled from "styled-components"
import Pagination from "../containers/Pagination"
import {useLocation } from 'wouter'

const TableDiv = styled.div`
  margin: 20px;
  font-size: 0.7rem;
  height: 400px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #D8D8D8;
    height: 150px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.0);
    border-radius: 8px;
  }
`

export default function Table({papers, page, setPage, setPapers}) {
  const [location, setLocation] = useLocation();

  return (
    <div style={{margin: "0 10%"}}>
      <TableDiv className="table-responsive">
        <table className="table table-bordered table-hover" style={{marginBottom: 0}}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Торговый код</th>
              <th scope="col">Краткое наименование ценной бумаги</th>
              <th scope="col">Номер государственной регистрации (при наличии)</th>
              <th scope="col">Наименование ценной бумаги</th>
              <th scope="col">Международный код (номер) идентификации ценных бумаг (ISIN) (при наличии)</th>
              <th scope="col">Код эмитента</th>
              <th scope="col">ИНН (при наличии)</th>
              <th scope="col">ОКПО (при наличии)</th>
            </tr>
          </thead>
          <tbody>
            { papers.map((item, index) =>(
              <tr key={item[0]}>
                <th scope="row">{(page - 1) * 100 + index + 1}</th>
                <td><a href="" onClick={() => setLocation("/" + item[1])}>{item[1]}</a></td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
                <td>{item[5]}</td>
                <td>{item[7]}</td>
                <td>{item[9]}</td>
                <td>{item[10]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableDiv>
      <Pagination
        page = {page}
        setPage = {setPage}
        setPapers = {setPapers}
      />
    </div>
  )}