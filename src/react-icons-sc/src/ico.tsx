import * as React from 'react'
import styled from '../../theme/styled-components';

export interface icoProps {
    className : string
    viewBox : string
    paths : string[]
    color? : string
    width? : string
    height? : string
    g? : any 
    styles? : string
}

export const Ico = styled(({className, viewBox, paths, g} : icoProps)=>(
    <svg 
        className ={className}
        version="1.1" 
        xmlns="http://www.w3.org/2000/svg"
        viewBox= {viewBox}        
    >   
        <g {...g} >
        
            {paths.map(path=>
                <path d={path} key={path}/>
            )}
        </g>
    </svg>

)).attrs({className : '' })`

    width : ${({width})=> width+"px" || "70px;" }
    height : ${({height}) => height+"px" || "45px;" }

    ${({styles})=> styles}

    g {
        fill : ${({color}) => color || "black"}
    }

`