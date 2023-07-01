import './App.css';
import {Circle, MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import DraggableCircle from "./DraggableCircle";
import axios from "axios";
import {useState} from "react";


function App() {
    const [center, setCenter] = useState([51.505, -0.09,])
    const [position, setPosition] = useState(center);
    const [radius, setRadius] = useState(1000)

    //тут ссылка на API (с портом)
    axios.defaults.baseURL = 'http://localhost:3001/'

    const sendData = async () => {
                   //тут эндпоинт
        await axios.post('/end-point', {position: position, radius: radius})
    }

    return (
        <div>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{height: '900px'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <DraggableCircle position={position} setPosition={setPosition} radius={radius}/>
            </MapContainer>

            <button onClick={sendData}>
                Send
            </button>
        </div>
    );
}

export default App;
