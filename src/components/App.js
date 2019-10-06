import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from './../reducers/index'

const App = props => {
  const [state, dispatch] = useReducer(reducer, [])

  const [eventState, setEventState] = useState(props)

  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'CREATE_EVENT',
      title: eventState.title,
      body: eventState.body
    })
    setEventState(props)
  }
  const setTitle = e => {
    setEventState({...eventState, title: e.target.value})
  }
  const setBody = e => {
    setEventState({...eventState, body: e.target.value})
  }
  console.log(state)
  return (
    <div className="container-fluid">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={eventState.title} onChange={setTitle} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea className="form-control" id="formEventBody" value={eventState.body} onChange={setBody} />
        </div>

        <button className="btn btn-primary" onClick={addEvent}>イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>        
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
        <tbody></tbody>
      </table>
    </div>
  );
}

App.defaultProps = {
  title: '',
  body: ''
}

export default App
