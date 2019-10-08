import React, { useContext } from 'react'
import AppContext from './../contexts/AppContext'
import OperationLog from './OperationLog'

const OperationLogs = () => {
  const {state} = useContext(AppContext)
  return (
    <React.Fragment>
      <h4>操作ログ</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((log, index) => (<OperationLog key={index} log={log} />))}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default OperationLogs