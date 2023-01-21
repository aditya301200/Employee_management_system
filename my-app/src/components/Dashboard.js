import React, {useState} from 'react'
import Header from './Header'
import List from './List'
import { employeesData } from '../data/Data'

const Dashboard = () => {

  const [employees, setEmployees] = useState(employeesData)

  return (
    <div>
        <Header />
        <List employees={employees} setEmployees={setEmployees} />
    </div>
  )
}

export default Dashboard