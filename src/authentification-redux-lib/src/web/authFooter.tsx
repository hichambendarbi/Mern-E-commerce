import * as React from 'react';
import styled from "../../../theme/styled-components"

export const AuthFooter = () =>
    <LoginFooterContainer>
        <LoginFooterParagraph>
            <span>Ittyni 1.0.0 </span>
            <span>Health Care Application.</span>
            <span>
                Copyright
                © 2019
                All rights reserved.
            </span>
        </LoginFooterParagraph>
    </LoginFooterContainer>

const LoginFooterContainer = styled.footer`
    text-align: center;
    position: relative;
`
const LoginFooterParagraph = styled.p`
    span {
        color: rgba(0, 0, 0, 0.75) !important;
        font-weight: 400;
        font-size: 11px;
        padding: 14px 0;
        text-transform: uppercase;
        margin: 0;
    }
`