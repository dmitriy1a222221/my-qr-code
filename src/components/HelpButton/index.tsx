import React from "react";

import QuestionIcon from '../svg/QuestionIcon';

import { useStyles } from './styles';

const HelpButton = () => {
  const { helpButton, helpButton_icon } = useStyles();

  return (
    <div className={helpButton}>
      <QuestionIcon className={helpButton_icon}/>
      <span>Help</span>
    </div>
  );
}

export default HelpButton;
