import { useState } from 'react';

const useRandomColor = () => {

    const [colorBG, setColor] = useState('red');

    const randomizeColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    return { colorBG, randomizeColor };
};

export default useRandomColor;