import React from 'react';
import { StyledTextArea } from './styles';

export type TextAreaProps = {
  value: string;
}
function TextArea({ value }: TextAreaProps) {
  return (
    <StyledTextArea>
      {value}
    </StyledTextArea>
  )
}

export default TextArea;
