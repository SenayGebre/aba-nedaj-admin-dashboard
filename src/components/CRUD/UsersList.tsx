import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space} from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Table, Modal, Input } from "antd";
import { useState } from "react";
import Admin from './Admin';
import { IEmployee, PageEnum, dummyEmployeeList, } from "./Users.type";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;

};
const GasStations = (props: Props) => {
const [employeeList, setEmployeeList] = useState(
      dummyEmployeeList as IEmployee[]);
const { list, onDeleteClickHnd, onEdit } = props;
    
   interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    email: string;
   }
  const items = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
  ];

const columns: TableColumnsType<IEmployee> = [
  { title: 'id', dataIndex: 'id', key: 'id' },
  { title: 'firstName', dataIndex: 'firstName', key: 'firstName' },
  { title: 'lastName', dataIndex: 'lastName', key: 'lastName' },
  { title: 'email', dataIndex: 'email', key: 'email' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
    render: () => (
      <Space size="middle">
        < Button type="primary">Edit</ Button >{ ' ' }
        < Button type="primary">Delete</ Button >
      </Space>
      ),
    },]

return (
    <div className="App">
      <Table columns={columns} dataSource={list} >
      </Table>
    </div>
  )
  }
export default GasStations;
