import React from 'react'
import UsersTable from '../../components/table'
import "./index.scss"

const HomePage = ({users}) => {
  return (
    <UsersTable users={users}/>
  )
}

export default HomePage