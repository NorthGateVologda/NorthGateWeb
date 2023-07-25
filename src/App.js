import './styles/App.css'
import React from 'react'
import Map from './components/UI/Map/Map'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {toast, Toaster} from "react-hot-toast";
import Auth from './components/Auth/Auth';
import Spinner from './components/UI/Spinner/Spinner';
import {login, registration} from './api.auth';
import {getCity} from './api.city';

function App() {
  const center = Object({ lat: 64.5430543214365, lng: 40.53628921508789});
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState();
  
  useEffect(() => {
    if(city === '')
    {
        return;
    }
    let res = getCity(city);
    if (res !== undefined || res !== null)
    {
        setData(res);

    }
  }, [city])

  const reg = async () => {
    return await toast.promise(
        registration(name, password),
        {
            loading: 'Loading...',
            success: 'Success',
            error: 'Error!',
        }
    ).catch(function(error) {
        console.log(error);
    });
  }

  const log = async () => {
    return await toast.promise(
        login(name, password),
        {
            loading: 'Loading...',
            success: 'Success',
            error: 'Error!',
        }
    ).catch(function(error) {
        console.log(error);
    });
  }

  return (
    <>
        <Auth 
            name={name}
            setName={setName} 
            password={password} 
            setPassword={setPassword}
            registration={reg}
            login={log}
            
        />

        <Spinner setCity={setCity}/>

        <Map
            center={center}
            data={data}
        />

        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                className: '',
                duration: 3000,
                style: {
                    background: '#363636',
                    color: '#fff',
                },

                success: {
                    duration: 3000,
                    theme: {
                        primary: 'green',
                        secondary: 'black',
                    },
                },
            }}
        />
    </>
  )
}

export default App
