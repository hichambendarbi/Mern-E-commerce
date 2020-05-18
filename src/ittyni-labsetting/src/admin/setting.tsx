import * as React from 'react';
import { Table, Tr, Th, Td } from '../common/listStyle'
import {Dropallback} from '../../../commons/DropAllBack'
import { PopUp } from '../../../commons/PopUp';
import {
    Container,
    ContainerNavigation,
    LinkNavigation,
    ContainerSearch,
    Button, Input,
    TitleTablePararameters,
    SpanTextButtonNouveu,
    InputParams,
    ContainerInputsParams
} from '../common/settingStyle'

import setting from '../dispatcher/setting'


import { useSelector } from 'react-redux';


export const Setting: React.FC<any> = () => {

    // show & hide add new param 
    const [add, addCreateParams] = React.useState(false);

    // Navigation inside Parameters Table initialised by table "Ajouter Conge"
    const [tab, setTab] = React.useState("Ajouter Conge");

    const showTab = (tab: any) => {
        if (tab == "departement") {
            setDepartements([...departements])
            setTab("Ajouter Departement");
        }
        if (tab == "Jours Ferie") {
            setVacationDays([...holidays])
            setTab("Ajouter Jours Ferie")
        }
        if (tab == "conge"){
            setCongees([...leaves])
            setTab("Ajouter Conge")
        }
        if (tab == "automates"){
            setAutomates([...automates])
            setTab("Ajouter Automates")
        }
    }

    // settings data
    const [Departement, setDepartement] = React.useState<string>()
    const [Departements, setDepartements] = React.useState<any[]>([])
    const departements = useSelector((state: any) => state.setting.departements);

    // setting Leaves
    const [Congee, setCongee] = React.useState<string>();
    const [CongeDuration, setCongeDuration] = React.useState<string>();
    const [Congees, setCongees] = React.useState<any[]>([]);
    const leaves = useSelector((state: any) => state.setting.leaves);

    // setting holidays
    const [VacationName, setVacationName] = React.useState<string>()
    const [VacationFrom, setVacationFrom] = React.useState<Date>()
    const [VacationTo, setVacationTo] = React.useState<Date>()
    const [VacationDays, setVacationDays] = React.useState<any[]>([])
    const holidays = useSelector((state: any) => state.setting.holidays);

    // setting automates
    const [AutomateBrand, setAutomateBrand] = React.useState<string>()
    const [AutomateAnalyser, setAutomateAnalyser] = React.useState<string>()
    const [AutomateYear, setAutomateYear] = React.useState<string>()
    const [Automates, setAutomates] = React.useState<any[]>([])
    const automates = useSelector((state: any) => state.setting.automates);


    const Parameters = [
        // departement
        {
            title: "Ajouter Departement", headers: ["departement"],
            data: Departements, inputs: [{ field: "departement", onChange: setDepartement }],
            addSetting: () => setting.addDepartement(Departement)
        },
        // Holidays  
        {
            title: "Ajouter Jours Ferie", headers: ["Jours Feries", "de", "a"], data: VacationDays, inputs: [
                { field: "Jour Ferie", type: "text", onChange: setVacationName },
                { field: "date de debut", type: "date", onChange: setVacationFrom },
                { field: "date de fin", type: "date", onChange: setVacationTo },
            ],
            addSetting: () => setting.addHoliday({ holiday: VacationName, from: VacationFrom, to: VacationTo })
        },

        // Leave
        {
            title: "Ajouter Conge", headers: ["Conge", "duree"], data: Congees, inputs: [
                { field: "congee", type: "text", onChange: setCongee },
                { field: "duree du congee", type: "number", onChange: setCongeDuration }
            ],
            addSetting: () => setting.addLeave({ leave: Congee, duration: CongeDuration })
        },

        // automate
        {
            title: "Ajouter Automates", headers: ["Marque", "Refrerence", "mise en fonction"], data: Automates, inputs: [
                { field: "marque automate", type: "text", onChange: setAutomateBrand },
                { field: "analyseur", type: "text", onChange: setAutomateAnalyser },
                { field: "date de fonction", type: "date", onChange: setAutomateYear },
            ],
            addSetting: ()=>setting.addAutomate({ brand: AutomateBrand, analyzer: AutomateAnalyser, entryDate: AutomateYear })
        }
    ]
    // before anything fetch data first
    React.useEffect(() => {
        if (Departements.length <= 0) setting.fetchDepartement();
        if (VacationDays.length <= 0) setting.fetchHoliday();
        if (Congees.length <= 0) setting.fetchLeave();
        if (Automates.length <= 0) setting.fetchAutomate();
    }, [Departements, VacationDays, Congees, Automates])

    return (
        <React.Fragment>
            {/* Navigation Inside parameters setting */}
            <div style={{ width: "90%" }}>
                <TitleTablePararameters>Gestion Parameters</TitleTablePararameters>
            </div>

            <TabNavigation tabs={["conge", "departement", "Jours Ferie", "automates"]} onClick={showTab} />

            {Parameters.map((parameter: any) => (
                <div style={{ width: "90%" }}>
                    {parameter.title === tab &&
                        <div key={parameter.title}>
                            {/* add parameter */}
                            {add && <Dropallback/> }
                            {add &&
                                <ParametersModalCreateNew
                                    title={parameter.title} showHideModal={() => addCreateParams(!add)}
                                    inputs={parameter.inputs}
                                    addSetting={parameter.addSetting}
                                />
                            }
                            <hr />
                            <ContainerSearch>
                                <Input type="text" name="search" placeholder="Search..." />
                                <Button onClick={() => addCreateParams(!add)}>+ <SpanTextButtonNouveu >Nouveau</SpanTextButtonNouveu> </Button>
                            </ContainerSearch>
                            <hr />
                            <Table>
                                <thead>
                                    <Tr >
                                        {parameter.headers.map((header: any) => <Th key={header}>{header}</Th>)}
                                    </Tr>
                                </thead>

                                <tbody>{parameter.data.map((body: any) => <Tr key={body.name || body.conge || body.unite || body.jrname}>
                                    {/* departement */}
                                    {body.name && <Td>{body.name}</Td>}

                                    {/* congee */}
                                    {body.leave && <Td>{body.leave}</Td>}
                                    {body.duration && <Td>{body.duration}</Td>}

                                    {/* holidays */}
                                    {body.holiday && <Td>{body.holiday}</Td>}
                                    {body.from && <Td>{new Date(body.from).toDateString()}</Td>}
                                    {body.to && <Td>{new Date(body.to).toDateString()}</Td>}
                                    
                                    {/* automate */}
                                    {body.brand && <Td>{body.brand}</Td>}
                                    {body.analyzer && <Td>{body.analyzer}</Td>}
                                    {body.entryDate && <Td>{new Date(body.entryDate).toDateString()}</Td>}
                                </Tr>)}</tbody>
                            </Table>
                        </div>
                    }
                </div>
            ))}
        </React.Fragment>
    )
}

const TabNavigation = ({ tabs, onClick }: any) => (
    <ContainerNavigation>
        {
            tabs.map((tab: any) => (
                <LinkNavigation key={tab} onClick={e => onClick(e.currentTarget.textContent)}>{tab}</LinkNavigation>
            ))
        }
    </ContainerNavigation>
)

const ParametersModalCreateNew = ({ showHideModal, title, inputs, addSetting }: any) => (
    <PopUp title={title} canCancel canConfirm
        onCancel={showHideModal} onConfirm={addSetting}>
        <ContainerInputsParams>
            {
                inputs.map((input: any) => (
                    <InputParams type={input.type}
                        placeholder={input.field} onChange={(e) => input.onChange(e.target.value)} />
                ))
            }
        </ContainerInputsParams>
    </PopUp>
)