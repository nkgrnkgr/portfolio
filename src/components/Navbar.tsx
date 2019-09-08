import React from 'react';
import { Menu, Segment, Image, Sticky } from 'semantic-ui-react';
import logo from '../images/logo.svg';

interface Props {
  menuItems: string[];
  activeMenuIndex: number;
  handleOnClickMenu: (index: number) => void;
}

export const Navbar: React.FC<Props> = ({
  menuItems,
  activeMenuIndex,
  handleOnClickMenu,
}) => {
  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item style={{ padding: '0px 10px' }}>
          <Image src={logo} as="a" href="/" style={{ width: '34px' }} />
        </Menu.Item>
        <Menu.Menu position="right">
          {menuItems.map((item, index) => (
            <Menu.Item
              key={item}
              name={item}
              active={activeMenuIndex === index}
              onClick={() => handleOnClickMenu(index)}
            />
          ))}
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};
