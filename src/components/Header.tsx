import React from 'react';
import { Menu, Segment, Image, Sticky } from 'semantic-ui-react';
import logo from '../images/logo.svg';

interface Props {
  menuItems: string[];
  activeMenuIndex: number;
  handleOnClickMenu: (index: number) => void;
}

export const Header: React.FC<Props> = ({
  menuItems,
  activeMenuIndex,
  handleOnClickMenu,
}) => {
  return (
    <Sticky>
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item style={{ padding: '0px 10px' }}>
            <Image src={logo} style={{ width: '34px' }} />
          </Menu.Item>
          {menuItems.map((item, index) => (
            <Menu.Item
              key={item}
              name={item}
              active={activeMenuIndex === index}
              onClick={() => handleOnClickMenu(index)}
            />
          ))}
        </Menu>
      </Segment>
    </Sticky>
  );
};
