
import styled from 'styled-components';

export const Table = styled('table')`
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    border-spacing: 0;
    min-width: 100%;
    margin-top: 50px;
`

export const Tr = styled('tr')`
    border-bottom: 1px solid #ccc;
`

export const Th = styled('th')`
    background-color: #F1F5F8;
    border-bottom: 2px solid #ccc;
    font-size: 12px;
    padding: 10px;
    text-transform: uppercase;
    text-align: left;
`

export const Td = styled('td')`
    background-color: #fff;
    border: 0;
    border-bottom: 1px solid #ccc;
    padding: 10px;
`