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
const BusinessList = (props: Props) => {
const [employeeList, setEmployeeList] = useState(
      dummyEmployeeList as IEmployee[]);
const { list, onDeleteClickHnd, onEdit} = props;

    
   interface DataType {
    key: React.Key;
    CompanyName: string;
    LogoURL: string;
 }
  const items = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
  ];

const columns: TableColumnsType<IEmployee> = [
  { title: 'Business Id', dataIndex: 'id', key: 'id' },
  { title: 'Company Name', dataIndex: 'CompanyName', key: 'CompanyName' },
  { title: 'Logo URL', dataIndex: 'LogoURL', key: 'LogoURL' },
  {
    title: 'Action',
    dataIndex: 'operation',
    key: 'operation',
    render: () => (
      <Space size="middle">
        < Button type="primary"onClick={() => onEdit(list)}>Edit</ Button >{ ' ' }
        < Button type="primary" onClick={() => onDeleteClickHnd(list)}>Delete
        </ Button >
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
export default BusinessList;
