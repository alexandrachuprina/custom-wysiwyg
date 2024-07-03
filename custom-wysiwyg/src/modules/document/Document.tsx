import React, { useState } from 'react';
import { StyledContainer } from './styles'
import { TextArea } from './TextArea';

function Document() {
  const [value, setValue] = useState<string>('');

  return (
    <StyledContainer>
      <TextArea value={value} />
    </StyledContainer>
  )
}

export default Document