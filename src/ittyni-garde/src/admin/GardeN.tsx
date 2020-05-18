import * as React from 'react';
import { Calendar } from '../common/datepicker';
import { ModalContainer, ModalHeader, ModalHeaderTitle, ModalLayout, ModalClose, ModalContent, ModalFooter } from '../common/modal';
import { Shift } from '../dispatcher/shift';
import { useSelector } from 'react-redux';
import { staff } from '../../../ittyni-staff/src/dispatcher/staff';
import { PopUp } from '../../../commons/PopUp';
import './gardeStyle.css';

const shiftClass = new Shift();

export const CreateNew: React.FC<any> = ({ close }) => {

    /**
     * user search a @constant{name : fetched from server} 
     * after enter @constant{day : instante state} or @constant{night : instant state}
     * @constant{pair : instante state} or @constant{impair : instante state} then 
     * @constant{startDate and endDate : instante state}
     * and click ok to dispatch all data to server 
     * that will update garde table
     */
    const [filteredStaff, setFilteredStaff] = React.useState<any[]>([]);
    const staffState = useSelector((state: any) => state.staff.staff) || [];

    // shifts data
    const [shifType, setShifType] = React.useState<string>('Jours');
    const [shifDays, setShifDays] = React.useState<string>('pair');
    const [shifStart, setShifStart] = React.useState<any>();
    const [shifEnd, setShifEnd] = React.useState<any>();

    // Employer to add shift to 
    const [selectedEmployer, selectEmployer] = React.useState<any>()


    const filterStaffState = (name: string) => {
        let regex = new RegExp(name, 'ig');
        setFilteredStaff(staffState.filter((e: any) => e.lastName.match(regex)))
    }
    
    function getShiftData(){
        shiftClass.getShiftData({
            ...selectedEmployer,
            type : shifType,
            days : shifDays,
            start : shifStart,
            end : shifEnd,
        });
        close();
    }
    React.useEffect(() => {
        if (staffState.length <= 0) staff.listStaff();
    }, [staffState])
    return (
<React.Fragment>
        {/* {isOpen && <Dropallback />} */}
        <PopUp title="Ajouter Garde" canCancel canConfirm onCancel={close} onConfirm={()=> getShiftData()}>
  <div className="form_wrapper">
  <div className="form_container">
  <div className="row clearfix">
  <div className="col_half" style={{width:"100%"}}>
        <div className="input_field">
                    {(selectedEmployer && <b onClick={e=>selectEmployer(undefined)}>{selectedEmployer.firstName} {selectedEmployer.lastName}</b>)
                    ||
                    (!selectedEmployer && <input type="text"  onChange={(e) => filterStaffState(e.target.value)}  placeholder="Recherche Par Filtrage personnel..." />)
                    }
        </div> 

        
        <div className="input_field">
        <ul>
                        {filteredStaff.map(staff => (
                            <li style={{ display: 'flex' }}
                                onClick={(e) => {
                                    selectEmployer({employerId : staff.id, firstName:staff.firstName,  lastName:staff.lastName , departement : {...staff.departement}});
                                    setFilteredStaff([]);
                                }}
                                key={staff.id}
                            >
                                <div>{staff.firstName}</div>{'/'}
                                <div>{staff.lastName}</div>{'/'}
                                <div>{staff.departement.name}</div>
                            </li>
                        ))}
                    </ul>
        </div> 
  </div>
  </div>
<div className="row clearfix">
    <div className="col_half" style={{marginBottom: "10px"}}>
        <div className="input_field">
            <input type="date" name="startDate"  onChange={(e: any) => setShifStart(e.target.value)}/>
        </div>
    </div>
    <div className="col_half">
       <div className="input_field">
            <input type="date" name="endDate"  onChange={(e: any) => setShifEnd(e.target.value)}/>
        </div>
    </div>
</div>  
 
  <div className="row clearfix">
    <div className="col_half" style={{marginBottom: "10px"}}>
  <div className="select" style={{width:"100%"}}>
<select id="slct" onChange={e=>setShifDays(e.target.value)}>
<option>Jours</option>
<option>Nuits</option>
</select>
</div>
</div>
<div className="col_half">
<div className="select" style={{width:"100%"}}>
<select id="slct" onChange={e=>setShifDays(e.target.value)}>
<option>Pair</option>
<option>Impair</option>
</select>
</div>
  </div>
</div>
  </div>
  </div>
        </PopUp>
 </React.Fragment>

    )
}


const ShiftDays = () => {
    return (
        <div style={{ flex: "0 8 0", minWidth: "70%" }}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </div>
    )
}