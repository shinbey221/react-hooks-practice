import React, { useState } from 'react'
import { CREATE_EVENT, DELETE_ALL_EVENT } from './../actions/index'

const EventForm = props => {
	const {state, dispatch} = props
  const [eventState, setEventState] = useState(props)
	const { title, body } = eventState

	const addEvent = e => {
    e.preventDefault()
		dispatch({ type: CREATE_EVENT, title: title, body: body })
		setEventState(props)
  }
  const deleteAllEvent = e => {
    e.preventDefault()
    const result = window.confirm('全てのイベントを本当に削除しても良いですか？')
    if (result)  dispatch({ type: DELETE_ALL_EVENT })
	}
	
  const setTitle = e => {
    setEventState({...eventState, title: e.target.value})
  }
  const setBody = e => {
    setEventState({...eventState, body: e.target.value})
	}
	
	const unCreatable = title === '' || body === ''

	return (
		<React.Fragment>
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
		</React.Fragment>
	)
}
EventForm.defaultProps = {
  title: '',
  body: ''
}
export default EventForm