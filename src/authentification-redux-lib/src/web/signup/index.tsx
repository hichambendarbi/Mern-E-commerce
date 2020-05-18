import * as React from 'react';
import { Alert } from "../../common/Alert";
import { LinkButton } from "../../common/Button";
import { FormContainer } from "../../common/Form";
import { Link } from "react-router-dom";

interface PropsFromContext { }
export const Signup: React.FunctionComponent<PropsFromContext> = () => {
    return (
        <>
            <FormContainer>
                <Alert>
                    <p>L'Enrgistrement a l'Application iTTyni est suspendue actuellement.</p>
                    <p>Merci de revenir plus tard.</p>
                </Alert>
                <LinkButton><Link to="/auth/login" >Vous Avez Deja un Compte</Link></LinkButton>
                <LinkButton><Link to="/auth/reset-password" >J'Arrive Pas Acceder A Mon Compte?</Link></LinkButton>
            </FormContainer>
        </>
    );
}