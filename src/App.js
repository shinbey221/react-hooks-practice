import React, { useState, useEffect } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  useEffect (() => {
    console.log('this is like componentDidMount')
  }, [])

  useEffect (() => {
    console.log('name changed')
  }, [name])

  return (
    <React.Fragment>
      <p>現在の{name}は、{price}です</p>
      <button onClick={() => setState({...state, price: price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: price - 1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={name} onChange={e => setState({...state, name: e.target.value})} />
    </React.Fragment>
  );
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App
