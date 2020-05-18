import { store } from '../../../index';
import { SettingActions } from '../store/actions';
class Setting {

    private accountName : string = "Centrale du CHU Hassan II";

    // get labo Departements
    fetchDepartement = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_DEPARTEMENT,
        payload : {
            query : `mutation {setting{listDepartement(accountName:"${this.accountName}"){name}}}`
        },
        path : 'labos'
    })

    // add departement
    addDepartement = (departement : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_DEPARTEMENT,
        payload : {
            query:`mutation{setting{addDepartement(departement:{name:"${departement}",accountName : "${this.accountName}"})}}`
        },
        path : 'labos'
    })
    
    // fetch holiday
    fetchHoliday = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_HOLIDAY,
        payload : {
            query : `mutation {setting{listHoliday(accountName:"${this.accountName}"){holiday from to}}}`
        },
        path : 'labos'
    })
    // add holiday
    addHoliday = ({holiday, from, to} : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_HOLIDAY,
        payload : {
            query : `mutation{setting{addHoliday(holiday:{holiday:"${holiday}",from:"${from.toString()}",to:"${to.toString()}",accountName:"${this.accountName}"})}}`
        },
        path : "labos"
    })
    
    // fetch Leave
    fetchLeave = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_LEAVE,
        payload : {
            query : `mutation{setting{listLeave(accountName:"${this.accountName}"){leave duration}}}`
        },
        path : 'labos'
    })

    // add Leave
    addLeave = ({leave, duration} : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_LEAVE,
        payload : {
            query: `mutation{setting{addLeave(leave:{leave:"${leave}",duration:${duration},accountName:"${this.accountName}"})}}`
        },
        path : 'labos'
    })

    // add automate
    fetchAutomate = ()=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_LIST_AUTOMATE,
        payload : {
            query : `mutation{setting{listAutomate(accountName:"${this.accountName}"){brand analyzer entryDate}}}`
        },
        path : 'labos'
    })

    // add automate
    addAutomate = ({brand, analyzer, entryDate} : any)=>store.dispatch({
        type : SettingActions.LAB_LABO_SETTING_ADD_NEW_AUTOMATE,
        payload : {
            query:`mutation{setting{addAutomate(automate:{brand:"${brand}",analyzer:"${analyzer}",entryDate:"${entryDate}",accountName:"${this.accountName}"})}}`
        },
        path:"labos"
    })
}

export default new Setting();