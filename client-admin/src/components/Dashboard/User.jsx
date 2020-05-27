import React from 'react'

export default function User({ notAdmin }) {
    return (
        <div>
          <button className="btn btn-primary"><i className="fas fa-user-plus mr-2"></i>User</button>
          <table className="table mt-3">
              <thead>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Joined</th>
              </thead>
              <tbody>
                {notAdmin.map(user => (
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.createdAt.split('T')[0]}</td>
                        <td colSpan="2">
                        <i class="fas fa-edit" style={{cursor:'pointer'}}></i>
                        <i class="fas fa-trash-alt ml-3" style={{cursor:'pointer'}}></i>
                        </td>
                    </tr>
                ))}
              </tbody>
          </table>
        </div>
    )
}
