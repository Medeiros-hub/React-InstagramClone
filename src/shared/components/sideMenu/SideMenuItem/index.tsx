
import { Button } from '../SideMenu.styles';

interface ISideMenuItemProps {
  icon: React.ReactNode,
  text: string,
  className: string,
}

const SideMenuItem: React.FC<ISideMenuItemProps> = ({ icon, text, className }: ISideMenuItemProps) => {
  return (
    <Button className={className}>
      <span style={{color: '#fff', fontSize: '18pt'}}>{icon}</span>
      <p>{text}</p>
    </Button>
  );
};

export default SideMenuItem;