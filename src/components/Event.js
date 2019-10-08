import React, { useContext } from 'react'
import { DELETE_EVENT } from './../actions/index.js'
import AppContext from './../contexts/AppContext'

const Event = ({ event }) => {
  const id = event.id
  const { dispatch } = useContext(AppContext)
  const handleClickDeleteButton = e => {
    e.preventDefault()
    const result = window.confirm(`イベント(id=${id})を削除しても良いですか？`)
    if (result) dispatch({type: DELETE_EVENT, id})
  }
  return (
    <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button>
      </td>
    </tr>
  )
}

export default Event