import React from 'react';

import Logo from '../svg/Logo';
import HelpButton from '../HelpButton';
import CardTextField from '../CardTextField';
import AccordeonItem from '../AccordeonItem';

import { useStylesCommon } from '../../styles/common';
import { useStyles } from './styles';

export const Step2 = () => {
    const { step2, step2__bLogo, step2__bTitle, step2__bCard } = useStyles();
    const { title2, title3, card } = useStylesCommon();

    return (
        <div className={step2}>
            <div className={step2__bLogo}>
                <Logo />
            </div>
            <div className={step2__bTitle}>
                <h2 className={title2}>2. Add content to the PDF QR Code</h2>
                <HelpButton />
            </div>
            <div className={step2__bCard}>
                <CardTextField/>
            </div>
            <AccordeonItem/>
        </div>
    )
}
