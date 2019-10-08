import React, { useReducer, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reducer from './../reducers/index'
import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'
import AppContext from './../contexts/AppContext'
const App = () => {
  const appData= JSON.parse(localStorage.getItem('appData'))
  const initialState = appData ? appData : {
    events: [],
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect (() => {
    localStorage.setItem('appData', JSON.stringify(state))
  }, [state])
  return (
    <AppContext.Provider value={{state, dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
}

export default App
