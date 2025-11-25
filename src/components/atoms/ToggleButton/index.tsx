import React from 'react';
import type { ToggleButtonProps } from './types';
import { toggleButtonStyle } from './styles';
import { useAppTheme } from '../../../system/helpers/hooks';

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick }) => {
  const theme = useAppTheme();

  return (
    <button onClick={onClick} css={toggleButtonStyle(theme)}></button>
  );
};

export default ToggleButton;