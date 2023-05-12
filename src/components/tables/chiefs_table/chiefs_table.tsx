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
  fullname: string;
  gender:string;
  email: string;
  phone: string;
  region: string;
  city: string;
  street:string;
  roleId:string;
  status:string;
  hashPass:string;
  defaultAccount:string;
  isNew:string;
}

const items = [
  { key: '1', label: 'Action 1' },
  { key: '2', label: 'Action 2' },
];

const App: React.FC = () => {
  const expandedRowRender = () => {
   
    
    const columns: TableColumnsType<ExpandedDataType> = [
      { title: 'id', dataIndex: 'id', key: 'id' },
     
      { title: 'fullname', dataIndex: 'fullname', key: 'fullname' },
      { title: 'gender', dataIndex: 'gender', key: 'gender' },

      { title: 'email', dataIndex: 'email', key: 'email' },
      { title: 'phone', dataIndex: 'phone', key: 'phone' },
      { title: 'region', dataIndex: 'region', key: 'region' },
      { title: 'city', dataIndex: 'city', key: 'city' },
      { title: 'street', dataIndex: 'street', key: 'street' },
      { title: 'roleId', dataIndex: 'roleId', key: 'roleId' },
      { title: 'gasStationId', dataIndex: 'gasStationId', key: 'gasStationId' },
      { title: 'status', dataIndex: 'status', key: 'status' },
      { title: 'hashPass', dataIndex: 'hashPass', key: 'hashPass' },
      { title: 'isNew', dataIndex: 'isNew', key: 'isNew' },
      { title: 'defaultAccount', dataIndex: 'defaultAccount', key: 'defaultAccount' },   
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
        fullname: 'Abebe Kebede',
         gender:'male',
        email: 'abebe@gmail.com',
        phone: '09090909',
        region: 'myregion',
        city: 'addis ababa',
        street:'mys street',
        roleId: 'chief',
        gasStationId: '123',
        hashPass:'#',
        status: 'status',
        isNew: 'yes',
        defaultAccount:'12345'



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
    <Link to="/chief_form">
<Space wrap>
        <Button type="primary">Add Chief</Button>
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

export default App;