export interface IEmployee {
  id: string;
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
  accountNumber:string
  status:string; 
}
export const dummyEmployeeList: IEmployee[] = [
  {
    id: new Date().toJSON().toString(),
    businessId: " 001 ",
    gasStationName: " Tota ",
    gasStationCode: "121212",
    phone: "344535434",
    region: "Yeka",
    city: "Addis Ababa",
    street:"1F11F",
    longitude:"1F11F",
    latitude:"1F11F",
    workingHours:"2:00-11:00",
    accountNumber:"99000",
    status:"up",
  },
]
export enum PageEnum {
  list,
  add,
  edit,
}
