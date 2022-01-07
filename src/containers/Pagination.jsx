import React from "react"
import api from '../api'

export default function Pagination({page, setPage, setPapers}) {
  let pageList

  const OnClickPage = (page) => {
    api.getPapers((page - 1) * 100).then((data) => {
      setPapers(data.securities.data)
      setPage(page)
    })
  }

  if (page < 4) 
    pageList = [1, 2, 3, 4, 5, "...", "В конец"]
  else
    pageList = ["В начало", page - 2, page - 1, page, page + 1, page + 2, "...", "В конец"]

  return (
    <ul className="react-bootstrap-table-page-btns-ul pagination" style={{marginLeft: "20px"}}>
      {pageList.map((pageItem) => (
        (page == pageItem) ?
          
        <li className="active page-item" key={pageItem}>
        <a href="#" className="page-link"> {pageItem}</a></li>:
        
        ("..." === pageItem) ?
        <li className="page-item" key={pageItem}>
        <a onClick={() => OnClickPage(pageList[4] + 1)} href="#" className="page-link">{pageItem}</a></li>:

        ("В начало" === pageItem) ?
        <li className="page-item" key={pageItem}>
        <a onClick={() => OnClickPage(1)} href="#" className="page-link">{pageItem}</a></li>:

        <li className="page-item" key={pageItem}>
        <a onClick={() => OnClickPage(pageItem)} href="#" className="page-link">{pageItem}</a></li>
      ))}
    </ul>
  )
}