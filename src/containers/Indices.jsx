import React, { useState, useEffect } from "react"
import styled from "styled-components"
import api from '../api'
import Spinner from "../components/Spinner"

const SpanHeader = styled.div`
  color: black;
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

const Container = styled.div`
  width: 560px;
  height: 340px;
  border: 1px dashed #8897AD;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`

const Text = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: #858585;
  width: 360px;
  height: 54px; 
  text-align: center;
  margin-bottom: 16px;
`
const TableDiv = styled.div`
  margin: 20px;
  font-size: 0.7rem;
  height: 400px;
`

export default function Indices({params}) {
  const [data, setData] = useState(null)
  const [columns, setColumns] = useState(null)

  useEffect(() => {
    api.getIndices(params.secid).then((data) => {
      setData(data.indices.data)
      setColumns(data.indices.columns)
    })
  }, [])

  if (!(data && columns)) {
    return <Spinner margin="70px auto"/>
  }

  if (data.length == 0)
  return (
    <center>
      <Container>
        <Text>
          Данных нет
        </Text>
      </Container>
    </center>
  )

  return (
    <center style={{margin: "0 25%"}}>
      <SecuritiesCards>
        <SpanHeader>
          Список индексов в которые входит бумага
        </SpanHeader>
        <TableDiv className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                  {columns.map((item) => (
                    <th key={item} scope="col">{item}</th>
                  ))}
              </tr>
            </thead>
            <tbody>
              { data.map((item, index) =>(
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  {item.map((i, index) => (
                    <td key={index}>{i}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </TableDiv>        
      </SecuritiesCards>
    </center>
  )
}