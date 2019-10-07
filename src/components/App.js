import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from './../reducers/index'
import Event from './Event'
const App = props => {
  const [state, dispatch] = useReducer(reducer, [])

  const [eventState, setEventState] = useState(props)
  const { title, body } = eventState

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title: title,
      body: body
    })
  }
  const deleteAllEvent = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result)  dispatch({ type: 'DELETE_ALL_EVENT' })
  }
  const setTitle = e => {
    setEventState({...eventState, title: e.target.value})
  }
  const setBody = e => {
    setEventState({...eventState, body: e.target.value})
  }
  const unCreatable = title === '' || body === ''
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={setTitle} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={setBody} />
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.length === 0}>全てのイベントを削除する</button>        
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
          </tr>
        </thead>
        <tbody>
          {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
        </tbody>
      </table>
    </div>
  );
}

App.defaultProps = {
  title: '',
  body: ''
}

export default App
