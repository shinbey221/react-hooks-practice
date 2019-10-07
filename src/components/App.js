import React, { useState, useReducer } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from './../reducers/index'
import Event from './Event'
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
  const deleteAllEvent = e => {
    e.preventDefault()
    dispatch({
      type: 'DELETE_ALL_EVENT'
    })
    setEventState(props)
  }
  const setTitle = e => {
    setEventState({...eventState, title: e.target.value})
  }
  const setBody = e => {
    setEventState({...eventState, body: e.target.value})
  }
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
        <button className="btn btn-danger" onClick={deleteAllEvent}>全てのイベントを削除する</button>        
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
