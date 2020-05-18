import styled from "../../../theme/styled-components"

export const Button = styled.button`
    background: #117a8b;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    border: 0;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    padding: 10px 0;
    margin-top: 30px;
    outline: 0;
    position: relative;
    transition: all 0.25s ease-out;

    span {
        background: #117a8b;
    }
`
export const LinkButton = styled(Button)`
    background: 0 0;
    font-weight: 400;
    color: gray;
    opacity: .85;
    margin-top: 14px;
    padding-top : 30px

    a {
        text-decoration : none;
        color : #000;
    }
`