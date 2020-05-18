import * as React from 'react';
import { Link } from 'react-router-dom';

export const StaffUpdateEmployer : React.FC<any> = ()=>{

    return(
        <div>
            <h1>Mettre a jour un employer</h1>  
            <Link to="./list-all-employers">Lister Tous</Link>
            <hr/>

            here goes info

        </div>
    )
}