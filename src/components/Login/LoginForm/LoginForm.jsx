import React from "react";
import {Field} from 'redux-form'
import {maxLengthCreator, requiredField} from "../../../validators/validators";
import {InputCreator} from "../../common/FormCreator/FormCreator";
import style from './LoginForm.module.css'

const maxLengthEmail = maxLengthCreator(20);
const maxLengthPassword = maxLengthCreator(40);

export const LoginForm = props => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <label htmlFor="email">Email: </label>
                </div>
                <Field
                    name={"email"}
                    component={InputCreator}
                    placeholder={"Введіть емейл..."}
                    validate={[requiredField, maxLengthEmail]}
                    type={"email"}
                />
            </div>
            <div>
                <div>
                    <label htmlFor="password">Password: </label>
                </div>
                <Field
                    name={"password"}
                    component={InputCreator}
                    placeholder={"Введіть пароль..."}
                    validate={[requiredField, maxLengthPassword]}
                    type={"password"}
                />
            </div>
            <div>
                <Field name={"rememberMe"} type={"checkbox"} component={"input"}/> remember me
            </div>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl && <Field
                name={"captcha"}
                component={InputCreator}
                placeholder={"Введіть символи із зображення ..."}
            />}
            {props.error && <div className={style.error}>{props.error}</div>}

            <button type={"submit"}>Увійти</button>

        </form>
    )
};