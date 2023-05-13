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
};

const GasStations = (props: Props) => {

const [employeeList, setEmployeeList] = useState(
      dummyEmployeeList as IEmployee[]);
const { list, onDeleteClickHnd,} = props;
    
   interface DataType {
    id: React.Key;
    businessId: string;
    gasStationName:string;
    gasStationCode: string;
    phone: string;
    region: string;
    city: string;
    street:string;
    longitude:string;
    latitude:string;
    workingHours:string;
    accountNumber:string;
    status:string; 
   }
  const items = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
  ];

const columns: TableColumnsType<IEmployee> = [
  { title: 'Id', dataIndex: 'id', key: 'id' },
  { title: 'Business ID', dataIndex: 'businessId', key: 'businessId' },

  { title: 'Gas Station Name', dataIndex: 'gasStationName', key: 'gasStationName' },
  { title: 'Gas Station Code', dataIndex: 'gasStationCode', key: 'gasStationCode' },
  { title: 'Phone Number', dataIndex: 'phone', key: 'phone' },
  { title: 'Region', dataIndex: 'region', key: 'region' },
  { title: 'City', dataIndex: 'city', key: 'city' },
  { title: 'street', dataIndex: 'street', key: 'street' },
  { title: 'Longtiude', dataIndex: 'longitude', key: 'longitude' },
  { title: 'Latitute', dataIndex: 'latitude', key: 'latitude' },
  { title: 'Working-Hour', dataIndex: 'workingHours', key: 'workingHours' },
  { title: 'Account Number', dataIndex: 'accountNumber', key: 'accountNumber' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
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
