import './styles/App.css'
import React from 'react'
import Map from './components/UI/Map/Map'
import axios from 'axios'
import { useState } from 'react'
import PseudoRegistration from './components/PseudoRegistration'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import {ToastContainer} from "react-bootstrap";
import AlertToast from "./components/UI/AlertToast/AlertToast";

function App() {
  const center = [64.5430543214365, 40.53628921508789]
  const [position, setPosition] = useState(center)
  const [radius, setRadius] = useState(1000)
  const [name, setName] = useState('')
  const [toast, setToast] = useState(false)

  const sendData = async () => {
    await axios.post('https://89.208.199.85:8000/api/v1/object_tourism/', {
        "center_lat": position.lat,
        "center_lon": position.lng,
        "radius": radius,
        "username": name
    })
    setToast(true)
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

        <ToastContainer position="bottom-end" className="p-3">
            <AlertToast show={toast} setShow={setToast}/>
        </ToastContainer>
    </>
  )
}

export default App
