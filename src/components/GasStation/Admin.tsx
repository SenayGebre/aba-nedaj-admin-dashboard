import { useEffect, useState } from "react";
import { IEmployee, PageEnum, dummyEmployeeList, } from "@app/components/GasStation/Users.type";
import GasStations from "@app/components/GasStation/UsersList"
import AddUser from "./AddUser";
import EditUser from "@app/components/CRUD/EditUser"
import { Button, Form, Input, Radio } from 'antd';

const GasStation = () => {
  
  
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
  return (
    <>
      <section>
        {shownpage === PageEnum.list && (
          <>
             <Button type="primary" onClick={onAddEmployeeClickHnd} >Add Gas Station</Button>
            {/* <input
              type="button"
              value="Add employee"
              onClick={onAddEmployeeClickHnd}
            /> */}
            <GasStations
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              
            />
          </>
        )}

        {shownpage == PageEnum.add &&
          (<AddUser 
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addUser} />)}

      </section>
    </>
  );
};
export default GasStation;
