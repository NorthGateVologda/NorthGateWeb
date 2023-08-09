"use client"
import React, {useState} from 'react';
import {BaseModal} from "@/shared/ui";
import {RegistrationForm} from "@/entities/user/ui/registration-form";
import {LoginForm} from "@/entities/user/ui/login-form";
import {login, registration} from '@/entities/user/api/authApi';
import toast from "react-hot-toast";


const Authentication = ({
    setSuccessfulAuth,
    showReg,
    setShowReg,
    showLog,
    setShowLog
}: {
    setSuccessfulAuth: React.Dispatch<React.SetStateAction<boolean>>,
    showReg: boolean,
    setShowReg: React.Dispatch<React.SetStateAction<boolean>>,
    showLog: boolean,
    setShowLog: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const registrationHandler = (values: {username: string, password: string}) => {
        toast.promise(
            registration(values.username, values.password),
            {
                loading: 'Загрузка...',
                success: 'Успешно',
                error: 'Ошибка!',
            }
        ).then(res => {
            if (res !== undefined)
            {
                setShowReg(false);
                setShowLog(false);
                setSuccessfulAuth(true);
            }
        }).catch(function(error) {
            console.debug(`status: ${error.response.status} ${error.response.statusText}`);
            if(error.response.data.data.username)
            {
                alert(`Ошибка! ${error.response.data.data.username}`);
            }
        });
    }

    const loginHandler = (values: {username: string, password: string}) => {
        toast.promise(
            login(values.username, values.password),
            {
                loading: 'Загрузка...',
                success: 'Успешно',
                error: 'Ошибка!',
            }
        ).then(res => {
            if (res !== undefined)
            {
                setShowLog(false);
                setShowReg(false);
                setSuccessfulAuth(true);
            }
        }).catch(function(error) {
            console.debug(`status: ${error.response.status} ${error.response.statusText}`);
            if(error.response.data.detail === 'No active account found with the given credentials')
            {
                alert(`Ошибка! Не верный логин или пароль`)
            }
            else if (error.response.data.detail)
            {
                alert(`Ошибка! ${error.response.data.detail}`)
            }
        });
    }


    return (
        <>
            <BaseModal
                show={showReg}
                setShow={setShowReg}
                header="Регистрация"
            >
                <RegistrationForm
                    onSubmit={registrationHandler}
                    setLogin={setShowLog}
                    setRegister={setShowReg}
                />
            </BaseModal>

            <BaseModal
                show={showLog}
                setShow={setShowLog}
                header="Вход"
            >
                <LoginForm
                    onSubmit={loginHandler}
                    setLogin={setShowLog}
                    setRegister={setShowReg}
                />
            </BaseModal>
        </>
    );
};

export {Authentication};