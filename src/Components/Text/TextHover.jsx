import { TypeAnimation } from 'react-type-animation';
import './text.css'
import { useState } from 'react';

const TextHover = ({ children }) => {
    const [textColor, setTextColor] = useState('red');

    return (
        <div className="hover-text" style={{ color: textColor }}>
            <TypeAnimation
                sequence={[
                    `${children}`,
                    800,
                    () => setTextColor('aqua'),
                    `${children}`,
                    800,
                    () => setTextColor('deeppink'),
                    '',
                    1000,
                    () => setTextColor('darkkhaki'),
                    '',
                ]}
                repeat={Infinity}
            />

        </div>
    );
};

export default TextHover;