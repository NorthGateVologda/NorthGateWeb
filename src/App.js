import './styles/App.css'
import React from 'react'
import Map from './components/UI/Map/Map'
import axios from 'axios'
import { useState } from 'react'
import PseudoRegistration from './components/PseudoRegistration'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import {toast, Toaster} from "react-hot-toast";

function App() {
  const center = Object({ lat: 64.5430543214365, lng: 40.53628921508789})
  const [position, setPosition] = useState(center)
  const [radius, setRadius] = useState(1000)
  const [name, setName] = useState('')

  const sendData = async () => {
    await toast.promise(
        axios.post('https://api.northgatevologda.ru/api/v1/object_tourism/', {
            "center_lat": position.lat,
            "center_lon": position.lng,
            "radius": radius,
            "username": name
        }),
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
        <PseudoRegistration
            setName={setName}
            name={name}
        />

        <Map
            center={center}
            position={position}
            radius={radius}
            setPosition={setPosition}
        />
        <Button
            variant="primary"
            className="send-button"
            onClick={sendData}
        >
            Send
        </Button>

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
