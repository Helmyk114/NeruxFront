import React from 'react';
import { Button } from '@nextui-org/react';

const ButtonAtom = ({ text, type = 'button', onClick }) => {
  return (
    <Button type={type} color="primary" onClick={onClick} css={{ marginTop: '20px' }}>
      {text}
    </Button>
  );
};

export default ButtonAtom;
