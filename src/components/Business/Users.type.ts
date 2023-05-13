export interface IEmployee {
  id: string;
  CompanyName: string;
  LogoURL: string;

}
export const dummyEmployeeList: IEmployee[] = [
  {
    id: new Date().toJSON().toString(),
    CompanyName: "Total",
    LogoURL: " Image URL ",    
  },
]
export enum PageEnum {
  list,
  add,
  edit,
}
