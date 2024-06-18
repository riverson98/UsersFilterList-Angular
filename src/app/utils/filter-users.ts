import { isWithinInterval } from "date-fns";
import { IUser } from "../interfaces/User/User.interface";
import { IFilterOptions } from "../interfaces/filter-options.interface";

const filterUsersByName = (name: string | undefined, users: IUser[]): IUser[] => {
    const NAME_NOT_TYPPED = name === undefined;

    if(NAME_NOT_TYPPED){
      return users;
    }

    const filteredList = users.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()))

    return filteredList;
};
  
const filterUsersByStatus = (status: boolean | undefined, users: IUser[]): IUser[] => {
    const STATUS_NOT_SELECTED = status === undefined;

    if(STATUS_NOT_SELECTED){
      return users;
    }

    const filteredList = users.filter((user) => user.ativo === status) ;
    return filteredList;
};
  
const filterUsersByDate = (startDate: Date | undefined, endDate: Date | undefined, users: IUser[]): IUser[] => {
    const DATE_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if(DATE_NOT_SELECTED){
      return users;
    }
    
    const checkDateInterval = (user: IUser) => isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate
    });

    const listFiltered = users.filter(checkDateInterval)
    
    return listFiltered;
};

const filterUsers = (filterOptions: IFilterOptions, users: IUser[]): IUser[] => {
    let filteredList: IUser[] = [];

    filteredList = filterUsersByName(filterOptions.name, users);
    filteredList = filterUsersByStatus(filterOptions.status, filteredList);
    filteredList = filterUsersByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
};

export { filterUsers }