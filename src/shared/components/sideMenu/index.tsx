// LOGO
// import logoBlack from './../../../assets/img/instagramLogoBlack.png';
import logoWhite from './../../../assets/img/instagramLogoWhite.png';

// ICONS
import { AiFillHome, AiOutlineHeart, AiOutlineMenu, AiOutlineInstagram, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsSearch, BsPlusSquare, BsCircle } from 'react-icons/bs';
import { FaRegCompass } from 'react-icons/fa';
import { CgClapperBoard } from 'react-icons/cg';
import { RiMessengerLine } from 'react-icons/ri';


import { Div, Section, InputGroup } from './SideMenu.styles';
import SideMenuItem from './SideMenuItem';
import { useState } from 'react';


export const MenuLateral: React.FC = (): JSX.Element => {  
  const [ wordInput, setwordInput ] = useState<string>('');


  const handleFilter = ({
    target
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const searchWord: string = target.value.toLowerCase();
    setwordInput(searchWord);
  };

  const clearInput = ():void => {
    setwordInput('');
  };


  return (
    <Div>
      <section>
        <div className='top-menu'>
          <div style={{marginBottom: '35px', padding: '0 15px', cursor: 'pointer'}}>
            <a href="/" >
              <img src={logoWhite} alt="Logo Instagram" />
              <SideMenuItem icon={<AiOutlineInstagram />} text='' className='logo-icon' />
            </a>
          </div>
          <aside>
            <InputGroup>
              <div className='search-icon-top'>
                {wordInput.length == 0 && (
                  <BsSearch />
                )}
              </div>
              <input 
                id='input-search' 
                type="text" 
                value={wordInput} 
                placeholder='Pesquisar'
                onChange={handleFilter}
              />
              <div className='close-icon-top'>
                {wordInput.length !== 0 && (
                  <AiOutlineCloseCircle onClick={clearInput} />
                )}
              </div>
            </InputGroup>
            <SideMenuItem icon={<AiOutlineHeart />} text='Notifica????es' className='heart-icon-top' />
          </aside>
        </div>
        <Section>
          <SideMenuItem icon={<AiFillHome />} text='P??gina Inicial' className='' />
          <SideMenuItem icon={<BsSearch />} text='Pesquisar' className='search-icon' />
          <SideMenuItem icon={<FaRegCompass />} text='Explorar' className='' />
          <SideMenuItem icon={<CgClapperBoard />} text='Reels' className='' />
          <SideMenuItem icon={<RiMessengerLine />} text='Mensagens' className='message-icon' />
          <SideMenuItem icon={<AiOutlineHeart />} text='Notifica????es' className='heart-icon-bottom' />
          <SideMenuItem icon={<BsPlusSquare />} text='Criar' className='' />
          <SideMenuItem icon={<BsCircle />} text='Perfil' className='perfil-icon' />
        </Section>
        <div style={{position: 'absolute', width: '100%'}}>
          <SideMenuItem icon={<AiOutlineMenu />} text='Mais' className='more-icon' />
        </div>
      </section>
    </Div>
  );
};