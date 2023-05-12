import { useEffect, useState } from "react";
import { IEmployee, PageEnum, dummyEmployeeList, } from "./Users.type";
import UsersList from "@app/components/CRUD/UsersList";
import AddUser from "./AddUser";
import EditUser from "@app/components/CRUD/EditUser"
import { Button, Form, Input, Radio } from 'antd';

const Admin = () => {
  
  const [employeeList, setEmployeeList] = useState( dummyEmployeeList as IEmployee[]);
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
      <article className="article-header">
        <header>
          <h1></h1>
        </header>
      </article>

      <section>
        {shownpage === PageEnum.list && (
          <>
             <Button type="primary" onClick={onAddEmployeeClickHnd} >Add User</Button>
            {/* <input
              type="button"
              value="Add employee"
              onClick={onAddEmployeeClickHnd}
            /> */}
            <UsersList
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

        {shownpage === PageEnum.edit &&
          (<EditUser
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
          )}
      </section>
    </>
  );
};
export default Admin;
