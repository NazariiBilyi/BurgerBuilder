import React, {Component} from 'react';
import './Auth.scss';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Auth extends Component {

    state = {
        controls : {
           email : {
               elementType: 'input',
               elementConfig: {
                   type: 'email',
                   placeholder: 'Your email...'
               },
               value: '',
               validation: {
                   required: true,
                   isEmail: true
               },
               valid: false,
               touched: false
           },
            password : {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Your password...'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
    };

    inputChangedHandler = (event, controlName) => {
        const updateControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };
        this.setState({
            controls: updateControls
        })
    };

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }

        if (rules.isEmail) {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            isValid = pattern.test(value) && isValid;
        }

        if (rules.isNumeric) {
            const pattern = /ˆ\d+$/;
            isValid = pattern.test(value) && isValid;
        }

        return isValid;
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]

            })
        }

        const form = formElementsArray.map(formElement => (
            <Input
                key={formElement.id}
                invalid={!formElement.config.valid}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) => this.inputChangedHandler(event, formElement.id)}
                shouldValidate={formElement.config.validation }
                touched={formElement.config.touched}
            />
        ));

        return (
            <div className='auth'>
                <form action="">
                    {form}
                    <Button btnType="success" >SUBMIT</Button>
                </form>
            </div>
        );
    }



}

export default Auth;
