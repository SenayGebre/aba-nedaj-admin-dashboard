import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table,Button, } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { ButtonType } from 'antd/lib/button';
//import { NavigationRoute } from 'workbox-routing';



  




interface DataType {
  key: React.Key;
  name: string;
  platform: string;
  version: string;
  upgradeNum: number;
  creator: string;
  createdAt: string;
}

interface ExpandedDataType {
  id: React.Key;
  model: string;
  code:string;
  region: string;
  lastKm: string;
  plateNumber:string;
  fuelType: string;
 
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const CarTable: React.FC = () => {
  const expandedRowRender = () => {
   
    
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: 'id', dataIndex: 'id', key: 'id' },
      { title: 'model', dataIndex: 'model', key: 'model' },
      { title: 'code', dataIndex: 'code', key: 'code' },
      { title: 'ownerName', dataIndex: 'ownerName', key: 'ownerName' },
      { title: 'plateNumber', dataIndex: 'plateNumber', key: 'plateNumber' },
      { title: 'lastKm', dataIndex: 'lastKm', key: 'lastKm' },
      { title: 'region', dataIndex: 'region', key: 'region' },
      { title: 'fuelType', dataIndex: 'fuelType', key: 'fuelType' },
      
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>update</a>
            <a>delete</a>
          
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        id: i.toString(),
        model: 'Suzuki',
        code:"231",
        ownerName:"abebe kebede",
         plateNumber:'3231',
         lastKm:"32",
         region:"region",
         fuelType:"fuel type"
       
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };
  
  
  
  const columns: TableColumnsType<DataType> = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 1; ++i) {
    data.push({
      key: i.toString(),
      name: 'Screen',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

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
        dataSource={data}
      />
     
      
    </>
  );
};

export default CarTable;