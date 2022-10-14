import ClipboardJS from 'clipboard';
import React, {useEffect, useState} from 'react';
// @ts-ignore
import ChidrenCom from './ChidrenCom.jsx';

export default function Test() {
    const [value, setValue] = useState([0]);
    new ClipboardJS('#btns', {
        text: (e) => {
            return 'haha1';
        }
    });
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
    };

    function success(pos: any) {
        const crd = pos.coords;
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
    }

    function error(err: any) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }, []);
    return (
        <div>
            <ChidrenCom onChange={(v: any) => {
                setValue(v)
            }} value={value}></ChidrenCom>
        </div>)
}
