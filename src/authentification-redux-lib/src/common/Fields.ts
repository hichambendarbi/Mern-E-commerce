import styled from "../../../theme/styled-components"

export const Fields = styled.div`
    display: flex;
    text-align: left;
    background-color: #fff;
    overflow: hidden;
    border-radius: 2px;
    line-height: 44px;

    * {
        height: 44px;
    }
`

export const UserField = styled(Fields)`
    margin: 4px 0;
`