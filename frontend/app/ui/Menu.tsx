import { createPortal } from 'react-dom';

import { createContext, useContext, useState } from 'react';
import Button from './Button';
import { useOutsideClick } from '~/hooks/useOutsideClick';

interface Position {
  x: number;
  y: number;
}

interface MenusContextType {
  openId: string;
  open: React.Dispatch<React.SetStateAction<string>>;
  close: React.DispatchWithoutAction;
  position: Position | null;
  setPosition: React.Dispatch<React.SetStateAction<Position | null>>;
}

const MenusContext = createContext<MenusContextType | undefined>(undefined);

interface MenuProps {
  children: React.ReactNode;
}

function Menu({ children }: MenuProps) {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState<Position | null>(null);

  const close: React.DispatchWithoutAction = () => setOpenId('');
  const open: React.Dispatch<React.SetStateAction<string>> = setOpenId;
  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

interface ToggleProps {
  id: string;
  children: React.ReactNode;
}

function Toggle({ id, children }: ToggleProps) {
  const context = useContext(MenusContext);
  if (!context) throw new Error('Open must be used within a Menus');
  const { openId, close, open, setPosition } = context;

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    const rect = e.currentTarget.closest('button')?.getBoundingClientRect();
    setPosition(() => {
      if (!rect) return null;

      return {
        x: window.innerWidth - rect.width - rect.x,
        y: rect.y + rect.height + 8,
      };
    });
    const stringId = String(id);
    openId === '' || openId !== stringId ? open(stringId) : close();
  }
  return <Button onClick={handleClick}>{children}</Button>;
}

interface ListProps {
  id: string | number;
  children: React.ReactNode;
}
function List({ id, children }: ListProps) {
  const context = useContext(MenusContext);
  if (!context) throw new Error('Open must be used within a Menus');
  const { openId, close, position } = context;
  const ref = useOutsideClick<HTMLUListElement>(() => close(), false);
  const stringId = String(id);
  if (openId !== stringId) return null;

  return createPortal(
    <ul
      className='fixed min-w-32 space-y-1 border-1 border-white bg-teal-700 py-2 text-right shadow-sm'
      style={{ right: position?.x ?? 20, top: position?.y ?? 20 }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body,
  );
}

Menu.Toggle = Toggle;
Menu.List = List;

export default Menu;
