import React from 'react';
import { MeuItemContainer } from './styles';

interface IMenuItemProps {
  icon: React.ReactNode,
  description?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}
const SideMenuItem: React.FC<IMenuItemProps> = ({ 
  icon,
  description
}: IMenuItemProps): JSX.Element => {

  return (
    <MeuItemContainer>
      <i>{icon}</i>
      <span>{description}</span>
    </MeuItemContainer>
  );
};

export default SideMenuItem;