import React, { useState } from 'react';

import CheckMark from '../svg/CheckMark';

import { useStyles } from './styles';

interface ColorSchemeProps {
    active?: boolean,
    topColor: string,
    bottomColor: string,
    onClick: any;
    id: string
}

const ColorScheme = ({ 
    active = false, topColor = '#FFFFFF', bottomColor = '#FFFFFF',
    onClick, id
}: ColorSchemeProps) => {
    const { 
        colorScheme, colorScheme_color1, colorScheme_color2,
        colorScheme_checkMark, colorScheme_border
     } = useStyles({ topColor, bottomColor });

    return (
        <div 
            id={id}
            className={`${colorScheme} ${active ? 'active' : ''}`}
            onClick={onClick}
        >
            <div className={colorScheme_border}></div>
            <div className={colorScheme_checkMark}>
                <CheckMark />
            </div>
            <div className={colorScheme_color1}>

            </div>
            <div className={colorScheme_color2}>

            </div>
        </div>
    )
}

export default ColorScheme;
