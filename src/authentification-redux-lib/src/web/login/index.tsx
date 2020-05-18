import * as React from 'react';
import { UserField, Fields } from "../../common/Fields";
import { Label } from "../../common/Label";
import { Input } from "../../common/Input";
import { Button, LinkButton } from "../../common/Button";
import { FormContainer } from "../../common/Form";
import { Link, Redirect } from "react-router-dom";
import { Ico } from '../../../../react-icons-sc/src/ico';
import { user } from '../../icons/user'
import { email } from '../../icons/email'
import { Auth } from '../../controller/auth';

// styles


interface PropsFromContext { }


export const LoginComponent: React.FunctionComponent<PropsFromContext> = (props) => {
    const auth = new Auth();

    return (
        <>
            <FormContainer>
                <UserField>
                    <Label htmlFor="Email">
                        <Ico {...user}
                            styles={`
                                    height: 100%;
                                    display: inline-block;
                                    width: 100%;
                                    background:  rgb(239, 240, 243);
                                `}
                        />
                    </Label>
                    <Input
                        type="text"
                        placeholder="Email"
                        onChange={e => auth.setEmail(e.target.value)}
                    />
                </UserField>
                <Fields>
                    <Label htmlFor="txtPassword">
                        <Ico {...email}
                            styles={`
                                    height: 100%;
                                    display: inline-block;
                                    width: 100%;
                                    background:  rgb(239, 240, 243);
                                `}
                        />
                    </Label>
                    <Input
                        type="password"
                        placeholder="Password"
                        onChange={e => auth.setPassword(e.target.value)}
                    />
                </Fields>
                <Button
                    type="submit"
                    onClick={auth.fetchUser}
                >
                    <span >Log in</span>
                </Button>
                <LinkButton><Link to="/auth/signup" style={{color: "gray"}}>Creer Un Compte</Link></LinkButton>
                <LinkButton><Link to="/auth/reset-password" style={{color: "gray"}}>J'Arrive Pas Acceder A Mon Compte?</Link></LinkButton>
            </FormContainer>
        </>
    )

}

