import React from 'react'

import Card from "../UI/Card";
import styles from './UserList.module.css'

const UserList = props => {
  let content

  if(props.users.length){
    content = props.users.map(user => (
        <li key={user.id}>{user.name} ({user.age} years old)</li>
      )
    )
  } else {
    content = <li>No users</li>
  }

  return (
    <Card className={styles.users}>
      <ul>
        {content}
      </ul>
    </Card>
  )

}

export default UserList