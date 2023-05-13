import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { IEmployee, PageEnum, dummyEmployeeList, } from "./Users.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

const AddUser = (props: Props) => { 

  const [businessId, setBusinessId] = useState("");
  const [gasStationName, setGasStationName] = useState("");
  const [gasStationCode, setStationCode] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [workingHours, setWorkingHours] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [status, setStatus] = useState("");
  

  const { onBackBtnClickHnd, onSubmitClickHnd,} = props;

  const onFirstNameChangeHnd = (e: any) => {
    setBusinessId(e.target.value);
    };
  const onLastNameChangeHnd = (e: any) => {
    setGasStationName(e.target.value);
    };
  const onStationCodeChangeHnd = (e: any) => {
    setStationCode(e.target.value);
    };
  const onPhoneChangeHnd = (e: any) => {
    setPhone(e.target.value);
    };
  const onRegionChangeHnd = (e: any) => {
    setRegion(e.target.value);
    };
  const onCityChangeHnd = (e: any) => {
    setCity(e.target.value);
    };
  const onStreeChangeHnd = (e: any) => {
    setStreet(e.target.value);
    };
  const onLongitudeChangeHnd = (e: any) => {
    setLongitude(e.target.value);
    };
  const onLatitudeChangeHnd = (e: any) => {
    setLatitude(e.target.value);
    };
  const onWorkingHoursChangeHnd = (e: any) => {
    setWorkingHours(e.target.value);
    };
  const onAccountNumberChangeHnd = (e: any) => {
  setAccountNumber(e.target.value);
    };
  const onStatusChangeHnd = (e: any) => {
    setStatus(e.target.value);
        };
    const onSubmitBtnClickHnd = (e: any) => {
      e.preventDefault();
        const data: IEmployee = {
          id: new Date().toJSON().toString(),
          businessId: businessId,
          gasStationName: gasStationName,
          gasStationCode: gasStationCode,
          phone:phone,
          region:region,
          city:city,
          street:street,
          longitude:longitude,
          latitude:latitude,
          workingHours:workingHours,
          accountNumber:accountNumber,
          status:status,
        };
        onSubmitClickHnd(data);
        onBackBtnClickHnd();
      };
  type LayoutType = Parameters<typeof Form>[0]['layout'];
  type props = Parameters<typeof Form>[0]['layout'];
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');
  const buttonItemLayout =
    formLayout === 'horizontal' ? { wrapperCol: { span: 14, offset: 4 } } : null;
  
  return (
    <Form>
      <Form.Item label="Business ID">
        <Input placeholder="Enter Business ID" value={businessId} onChange={onFirstNameChangeHnd} />
      </Form.Item>
      <Form.Item label="Gas Station Name">
        <Input placeholder="Enter Gas Station Name" value={gasStationName} onChange={onLastNameChangeHnd} />
      </Form.Item>
      <Form.Item label="Gas Station Code">
        <Input placeholder="Enter Gas Station Code" value={gasStationCode} onChange={onStationCodeChangeHnd} />
      </Form.Item>
      <Form.Item label="Phone Number">
        <Input placeholder="Enter Phone Number" value={phone} onChange={onPhoneChangeHnd} />
      </Form.Item>
      <Form.Item label="Region">
        <Input placeholder="Enter region" value={region} onChange={onRegionChangeHnd} />
      </Form.Item>
      <Form.Item label="City">
        <Input placeholder="Enter the city" value={city} onChange={onCityChangeHnd} />
      </Form.Item>
      <Form.Item label="Street">
        <Input placeholder="Enter the street" value={street} onChange={onStreeChangeHnd} />
      </Form.Item>
      <Form.Item label="Longtiude">
        <Input placeholder="Enter Longtiude" value={longitude} onChange={onLongitudeChangeHnd} />
      </Form.Item>
      <Form.Item label="Latitute">
        <Input placeholder="Enter Latitute" value={latitude} onChange={onLatitudeChangeHnd} />
      </Form.Item>
      <Form.Item label="Working Hour">
        <Input placeholder="Enter Working Hour" value={workingHours} onChange={onWorkingHoursChangeHnd} />
      </Form.Item>
      <Form.Item label="Account Number">
        <Input placeholder="Enter Account Number" value={accountNumber} onChange={onAccountNumberChangeHnd} />
      </Form.Item>
      <Form.Item label="Status">
        <Input placeholder="Enter Status" value={status} onChange={onStatusChangeHnd} />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type="primary" onClick={onBackBtnClickHnd} >Back</Button>{' '}
        <Button type="primary" onClick={onSubmitBtnClickHnd} >Add Gas Station</Button>
      </Form.Item>
    </Form>
  )
}
export default AddUser;
