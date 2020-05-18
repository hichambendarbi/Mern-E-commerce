import { store } from "../../../index";
import { ShiftActions } from "../store/actions";
export class Shift {
  private accountName: string = "Centrale du CHU Hassan II";

  constructor() {}

  // dispatch date
  getShiftData = (shiftData: any) => {
    const days: number[] = [];
    const startDay = new Date(shiftData.start).getDate();
    const endDay = new Date(shiftData.end).getDate();

    for (let i = startDay; i <= endDay; i++) {
      if (i % 2 == 0 && shiftData.days == "pair") days.push(i);
      if (i % 2 == 1 && shiftData.days == "Impair") days.push(i);
    }

    store.dispatch({
      type: ShiftActions.LAB_LABO_SHIFT_ADD_NEW,
      payload: {
        query: 
            `mutation {
              assignShiftsToEmployer(
                userId : "${shiftData.employerId}",
                departementId : "${shiftData.departement._id}",
                mounth : ${new Date(shiftData.start).getMonth()},
                year : ${new Date(shiftData.start).getFullYear()},
                type : "${shiftData.type}",
                days : [${days}],
                accountName : "${this.accountName}")
            }`,
      },
      path : 'labos/staff'
    });
  };

  // fetch all shifts
  fetchShifts = () =>store.dispatch({
      type : ShiftActions.LAB_LABO_SHIFT_FETCH_ALL,
      payload : {
        query:`query{fetchAllShifts(accountName:"${this.accountName}"){employer{firstName lastName} departement{name} days mounth year type}}`
      },
      path : 'labos/staff'
  })
}

export default new Shift();
