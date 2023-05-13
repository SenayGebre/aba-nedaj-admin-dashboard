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

const GasStations: React.FC = () => {
  const expandedRowRender = () => {
   
    
    const columns: TableColumnsType<ExpandedDataType> = [
     
      { title: 'id', dataIndex: 'id', key: 'id' },
      { title: 'businessId', dataIndex: 'businessId', key: 'businessId' },

      { title: 'gasStationName', dataIndex: 'gasStationName', key: 'gasStationName' },
      { title: 'gasStationCode', dataIndex: 'gasStationCode', key: 'gasStationCode' },
      { title: 'phone', dataIndex: 'phone', key: 'phone' },
      { title: 'region', dataIndex: 'region', key: 'region' },
      { title: 'city', dataIndex: 'city', key: 'city' },
      { title: 'street', dataIndex: 'street', key: 'street' },
      { title: 'longitude', dataIndex: 'longitude', key: 'longitude' },
      { title: 'latitude', dataIndex: 'latitude', key: 'latitude' },
      { title: 'workingHours', dataIndex: 'workingHours', key: 'workingHours' },
      { title: 'accountNumber', dataIndex: 'accountNumber', key: 'accountNumber' },
      { title: 'status', dataIndex: 'status', key: 'status' },
      
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size="middle">
            <a>update</a>
            <a>delete</a>
            <Dropdown menu={{ items }}>
              <a>
                Actions <DownOutlined />
              </a>
            </Dropdown>
          </Space>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        id: i.toString(),
        businessId: 'Abebe Kebede',
        gasStationName: 'Abebe Kebede',
        gasStationCode: 'Abebe Kebede',
         phone:'090909',
        region: 'myregion',
        city: 'addis ababa',
       street:"street",
       longitude:"longitude",
       latitude:"latitude",
       workingHours:"10",
       accountNumber:"123",
       status:"status"

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
    
<Link to="/gasStationsForm">
<Space wrap>
        <Button type="primary">Add Gas Station</Button>
       
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

export default GasStations;