import * as React from 'react';
import { Table, Tr, Th, Td } from '../common/listStyle'

export const TicketsViewAll: React.FC<any> = () => {

    const Parameters = [
        { title : "Lister tous les ", 
          headers: ["nom du ticket", "status", "creer par", "gerer par"], 
          data : ["probleme des ISE", "en Cours", "admin", "societe SomaLab"] 
        }
    ]

    return (
        <div style={{width: "90%"}}>
            {Parameters.map((parameter:any) =>(
                <div key={parameter.title}>
                <h1>{parameter.title}</h1>
                <hr />
                <p>
                    <Table>
                        <thead>
                        <Tr >
                            {parameter.headers.map((header:any) =><Th key={header}>{header}</Th>)}
                        </Tr>
                        </thead>
                        <tbody><Tr>{parameter.data.map((body:any)=><Td>{body}</Td>)}</Tr></tbody>
                    </Table>
                </p>
                <hr />
                </div>
            ))}
        </div>
    )
}

