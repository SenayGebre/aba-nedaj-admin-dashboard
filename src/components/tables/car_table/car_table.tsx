import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table,Button, } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonType } from 'antd/lib/button';

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  email: string;

}
const CarTable: React.FC = () => {
  const expandedRowRender = () => {
   
   const columns: TableColumnsType<DataType> = [
      { title: 'id', dataIndex: 'id', key: 'id' },
      { title: 'firstName', dataIndex: 'firstName', key: 'firstName' },
      { title: 'lastName', dataIndex: 'lastName', key: 'lastName' },
      { title: 'email', dataIndex: 'email', key: 'email' },
    ];

     const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        id: i.toString(),
        firstName: 'Tsion',
        lastName:"Ketema",
        Email:"Tsion Ketema",
       
      });
    } 
    return <Table columns={columns}  pagination={false} />;
  };
  
return (
   <>
    <Link to="/carForm">
      <Space wrap>
        <Button type="primary">Add Car</Button>
       
      </Space>
      </Link>
      <Table
       // columns={columns}
       
        expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
        
      />
     
      
    </>
  );
};

export default CarTable;