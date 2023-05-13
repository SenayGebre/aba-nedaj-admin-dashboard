import { useEffect, useState } from "react";
import { IEmployee, PageEnum, dummyEmployeeList, } from "./Users.type";
import BusinessList from "@app/components/Business/UsersList";
import AddUser from "./AddUser";
import { Button, Form, Input, Radio } from 'antd';
import EditUser from "./EditUser";

const Business = () => {

  type Props = {
    data: IEmployee;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: IEmployee) => void;
  };
  

  const [employeeList, setEmployeeList] = useState(dummyEmployeeList as IEmployee[]);
  const [shownpage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);


  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add)
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addUser = (data: IEmployee) => {
    setEmployeeList([...employeeList, data]);
  };
  const deleteEmployee = (data: IEmployee) => {
    // To Index from array i,e employeeList
    // Splice that
    // Update new record

    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    setEmployeeList(tempList);
  };
  const editEmployeeData = (data: IEmployee) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    setEmployeeList(tempData);
  };

return (
    <>
      <section>
        {shownpage === PageEnum.list && (
          <>
            <Button type="primary" onClick={onAddEmployeeClickHnd} >Add Business</Button>
            <BusinessList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}
        
        {shownpage == PageEnum.add &&
          (<AddUser
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addUser} />)}
        
         {shownpage === PageEnum.edit && (
          <EditUser
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )} 
      </section>
    </>
  );
};
export default Business;
