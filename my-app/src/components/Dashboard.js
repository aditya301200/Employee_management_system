import React, {useState} from 'react'
import Header from './Header'
import List from './List'
import { employeesData } from '../data/Data'
import Add from './Add'
import Edit from './Edit'

const Dashboard = () => {

  const [employees, setEmployees] = useState(employeesData)
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    //TODO
  }

  const handleEdit = () => {
    //TODO
  }

  return (
    <div className='container'>
      {/* List */}
      {
        !isAdding && !isEditing &&(
          <>
            <Header setIsAdding={setIsAdding} />
            <List
              employees={employees}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        )
      }
      {/* Add */}
      {
        isAdding && (
          <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
          />
        )
      }
      {/* Edit */}
      {
        isEditing && (
          <Edit
            employees={employees}
            selectedEmployee={selectedEmployee}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
          />
        )
      }
    </div>
  )
}

export default Dashboard