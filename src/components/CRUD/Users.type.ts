export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const dummyEmployeeList: IEmployee[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: " Tsion ",
    lastName: " Ketema ",
    email: " zionketema2@gmail.com ",
    
  },
]
export enum PageEnum {
  list,
  add,
  edit,
}
