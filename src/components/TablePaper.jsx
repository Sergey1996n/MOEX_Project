import React from "react"
import styled from "styled-components"
import { useLocation } from 'wouter'

const SpanHeader = styled.div`
  color: #20B2AA;
  font-weight: 700;
  font-size: 18px;
  margin: 10px 0;
`
const SecuritiesCards = styled.div`
  border: #cfcfcf 1px solid;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
`

export default function TablePaper({paper, params}) {
  const [location, setLocation] = useLocation();

  return (
    <center style={{margin: "0 20%"}}>
      <SecuritiesCards>
        <SpanHeader>
          {paper[1][2]}
        </SpanHeader>
        <table className="table">
          <tbody>
            {paper.map((item, index) =>(
              <tr key={index} >
                <th scope="row"></th>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
              </tr>
            ))}
            <tr>
              <th scope="row"></th>
              <td>Список индексов в которые входит бумага</td>
              <td><a href="" onClick={() => setLocation(`${params}/indices`)}>{params}/indices</a></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td>Агрегированные итоги торгов</td>
              <td><a href="" onClick={() => setLocation(`${params}/aggregates`)}>{params}/aggregates</a></td>
            </tr>
          </tbody>
        </table>
      </SecuritiesCards>
    </center>
  )
}