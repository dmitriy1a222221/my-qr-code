import React, { useState } from 'react';
import { useFormik } from 'formik';

import ColorScheme from '../ColorScheme';
import Arrow from '../svg/Arrow';
import Reverse from '../svg/Reverse';
import TextField from '../TextField';

import { useStyles } from './styles';
import { useStylesCommon } from '../../styles/common';

const listOfColorScheme = [
    {
        id: '1',
        active: true,
        topColor: '#A5AAF5',
        bottomColor: '#D9DCE1'
    },
    {
        id: '2',
        active: false,
        topColor: '#F4E697',
        bottomColor: '#D9DCE1'
    },
    {
        id: '3',
        active: false,
        topColor: '#ECB391',
        bottomColor: '#D9DCE1'
    },
    {
        id: '4',
        active: false,
        topColor: '#D5F698',
        bottomColor: '#D9DCE1'
    },
    {
        id: '5',
        active: false,
        topColor: '#858DF3',
        bottomColor: '#DC9698'
    },
    {
        id: '6',
        active: false,
        topColor: '#F4E697',
        bottomColor: '#9889F3'
    },
    {
        id: '7',
        active: false,
        topColor: '#ECB490',
        bottomColor: '#8CC681'
    }
]

interface colorSchemeInterface {
    id: string,
    active: boolean,
    topColor: string,
    bottomColor: string
}

const validate = (values: any) => {
    const errors = {} as any;
    const hexCheck = /^#([0-9a-f]{3}){1,2}$/i;

    if (!values.topColor) {
      errors.topColor = 'Required';
    } else if (!hexCheck.test(values.topColor)) {
      errors.topColor = 'Must be in HEX format';
    }

    if (!values.bottomColor) {
        errors.bottomColor = 'Required';
      } else if (!hexCheck.test(values.bottomColor)) {
        errors.bottomColor = 'Must be in HEX format';
      }

    return errors;
  };

const AccordeonItem = () => {
    const [listOfColors, setListOfColors] = useState(listOfColorScheme);
    const [activeColorScheme, setActiveColorScheme] = useState(listOfColorScheme[0]);
    const [accordeonActive, setAccordeonActive] = useState(true);

    const {
        accordeonItem, accordeonItem_header, 
        accordeonItem_arrow,
        accordeonItem_header__subtitle,
        accordeonItem_body, colorSchemes,
        accordeonItem_textFields, accordeonItem_textField1,
        accordeonItem_textField2, accordeonItem_textFieldRevese
    } = useStyles();
    const { card, title3 } = useStylesCommon();

    const formik = useFormik({
        initialValues: {
            topColor: activeColorScheme.topColor,
            bottomColor: activeColorScheme.bottomColor
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    const hunlderColorScheme = (element: colorSchemeInterface) => {
        const newList = listOfColors.map((item) => {
            if(item.id == element.id) {
                item.active = !item.active
            } else {
                item.active = false;
            }

            return {
                ...item,
            }
        })
        
        setListOfColors(newList as []);
        setActiveColorScheme(element);

        delete formik.errors.topColor;
        delete formik.errors.bottomColor;
    }
    const hundleInputs = (event: any) => {
        event.preventDefault();

        const hexCheck = /^#([0-9a-f]{3}){1,2}$/i;

        setActiveColorScheme({
            ...activeColorScheme,
            [event.target.id]: event.target.value
        })

        if(hexCheck.test(event.target.value)) {
            const newList = listOfColors.map((item) => {
                if(item.active) {
                    return {
                        ...item,
                        [event.target.id]: event.target.value
                    }
                } else {
                    return item
                }
            })
            
            setListOfColors(newList as [])
        }

        formik.handleChange(event);
    }
    const hundleReverse = () => {
        setActiveColorScheme({
            ...activeColorScheme,
            topColor: activeColorScheme.bottomColor,
            bottomColor: activeColorScheme.topColor
        });

        const newList = listOfColors.map((item) => {
            if(item.active) {
                return {
                    ...item,
                    topColor: item.bottomColor,
                    bottomColor: item.topColor
                }
            } else {
                return item
            }
        })
        
        setListOfColors(newList as [])
    }
    const clickAccordeonItem = () => {
        setAccordeonActive(!accordeonActive);
    }

    return (
        <div className={`${accordeonItem} ${card} ${accordeonActive ? 'active': ''}`}>
            <div className={accordeonItem_header}>
                <div>
                    <h3 className={title3}>
                        Design & Customize
                    </h3>
                    <div className={accordeonItem_arrow} onClick={() => clickAccordeonItem()}>
                        <Arrow/>
                    </div>
                </div>
                <p className={accordeonItem_header__subtitle}>
                    Choose your color scheme
                </p>
            </div>
            <div className={accordeonItem_body}>
                <div className={colorSchemes}>
                    {
                        listOfColors.map((item) => (
                            <ColorScheme 
                                key={item.id}
                                id={item.id}
                                active={item.active}
                                topColor={item.topColor}
                                bottomColor={item.bottomColor}
                                onClick={() => hunlderColorScheme(item)}
                            />
                        ))
                    }
                </div>
                <div className={accordeonItem_textFields}>
                    <div className={accordeonItem_textField1}>
                        <p>Primary Color</p>
                        <TextField 
                            id='topColor'
                            isTextFieldBColor={true}
                            color={activeColorScheme.topColor}
                            value={activeColorScheme.topColor}
                            onChange={(e) => hundleInputs(e)}
                            onBlur={formik.handleBlur}
                            onInput={formik.setTouched}
                            error={formik.touched.topColor && formik.errors.topColor ? formik.errors.topColor : undefined}
                        />
                    </div>
                    <div className={accordeonItem_textFieldRevese} onClick={() => hundleReverse()}>
                        <Reverse />
                    </div>
                    <div className={accordeonItem_textField1}>
                        <p>Secondary Color</p>
                        <TextField
                            id='bottomColor'
                            isTextFieldBColor={true}
                            color={activeColorScheme.bottomColor}
                            value={activeColorScheme.bottomColor}
                            onChange={(e) => hundleInputs(e)}
                            onBlur={formik.handleBlur}
                            onInput={formik.setTouched}
                            error={formik.errors.bottomColor ? formik.errors.bottomColor : undefined}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccordeonItem;
