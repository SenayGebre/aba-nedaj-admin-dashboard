import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table,Button, } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonType } from 'antd/lib/button';
import { IEmployee } from "@app/components/CRUD/Users.type";
import "./UsersList.style.css";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;

};

const UsersList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {list.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{employee.email}</td>
              <td>
                <div>
                  < input
                    type="button"
                    value="Edit"
                    onClick={() => onEdit(employee)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(employee)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>

    </div>
    
  );
}
export default UsersList;