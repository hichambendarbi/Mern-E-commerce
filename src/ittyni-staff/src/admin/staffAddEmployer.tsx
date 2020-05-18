import * as React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import { TitleTablePararameters } from '../../../ittyni-labsetting/src/common/settingStyle';
import { staff } from '../dispatcher/staff';
import { useSelector } from 'react-redux';

export const StaffAddEmployer: React.FC<any> = ({ username }) => {

  // create fileds hook
  

  // hide & show departement
  const [hidden, setHidden] = React.useState(false);

  // declare fields
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [civility, setCivility] = React.useState();
  const [unite, setUnite] = React.useState('')
  const [PPR, setPPR] = React.useState();

  // departement 
  const [departementName, setDepartementName] = React.useState();
  const departements: any[] = useSelector((state: any) => state.setting.departements) || [];

  // add new departement
  const addNewDepartement = () => {
    staff.addNewDepartement(departementName)
  }
  // Add new Employer
  const createEmployer = () => {
    const employer = {
      civility: civility,
      firstName : firstName,
      lastName : lastName,
      ppr : Number(PPR),
      departementName : unite,
    }
    console.log(employer)
    staff.addNewEmployers(employer)
  }


  // before anything get departements from
  // api
  React.useEffect(() => {
    if (departements.length <= 0) staff.fetchDepartement()
  }, [departements])

  return (
    <React.Fragment>
      <div style={{ width: "90%" }}>
        <TitleTablePararameters>
          Ajout de nouvelle Employer
           </TitleTablePararameters>
        <Link to={'./list-all-employers'} > {`<`}Retour </Link>
        <hr />
      </div>

      <div className="form_wrapper">
        <div className="form_container">
          <div className="title_container">
            <h3>* Tous les chams sont requis</h3>
          </div>
          <div className="row clearfix">
            <AddPersonalInput label="nom" onChange={(e)=>setLastName(e.target.value)}/>
            <AddPersonalInput label="prenom" onChange={(e)=>setFirstName(e.target.value)}/>
          </div>
          <div className="row clearfix">
            <AddPersonalInput label="PPR" onChange={(e)=>setPPR(e.target.value)} />
            <div className="col_half">
              <label>Unite</label>
              {/* <div className="input_field">
            <input type="text" name="unite" placeholder="* Unite"/>
          </div> */}
              <div className="test">
                <FormFieldSelect
                  listToChose={['-', ...departements.map(dep => dep.name)]} 
                  onChange={(e: any) => setUnite(e.target.value)}
                />
                <div style={{ width: "30%" }}>
                  {hidden && <button className="nouv_unite_btn" onClick={e => addNewDepartement()}>Confirmer</button>}
                  {!hidden && <button className="nouv_unite_btn" onClick={e => setHidden(!hidden)}>+ Nouvelle</button>}
                </div>
              </div>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col_half">
              <label>Civilite</label>
              <FormFieldSelect listToChose={["-", "Mr", "Mme"]} onChange={(e: any) => setCivility(e.target.value)} width="100%" />
            </div>
            {hidden && <AddPersonalInput label="Nouvelle Unite" onChange={(e: any) => setDepartementName(e.target.value)}/>}
          </div>
          <input className="button" type="submit" value="Sumbit" onClick={(e)=>createEmployer()}/>
        </div>
      </div>
    </React.Fragment>
  )
}


interface FormFieldSelectProps {
  listToChose: any[]
  onChange?: (e: any) => void
  onClick?: (e: any) => void
  width?: string
  value?: string
  name?: string
}

const FormFieldSelect: React.FC<FormFieldSelectProps> = ({ listToChose, onChange, width, value, name, onClick }) => (
  <div className="select" style={{ width }}>
    <select value={value} name={name} id="slct" onChange={onChange} onClick={onClick}>
      {listToChose.map(dep => <option>{dep}</option>)}
    </select>
  </div>
)

interface IAddPersonalInput {
  label: string
  onChange?: (e: any) => void
}
const AddPersonalInput: React.FC<IAddPersonalInput> = ({ label, onChange }) => {
  return (
    <div className="col_half">
      <label>{label}</label>
      <div className="input_field">
        <input type="text" name="prenom" placeholder={label} onChange={onChange} />
      </div>
    </div>
  )
}