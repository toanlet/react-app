import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import { Badge, Button } from 'antd';
import { ReactComponent as CardIcon } from 'src/assets/svg/cart-shopping.svg';
import { useAppSelector } from 'src/hooks';
interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const cardItem = useAppSelector(
    (s: any) => s.rootReducer.cardReducer.cardList
  );

  const token = localStorage.getItem('token');

  const [isLogin, setLogin] = useState(Boolean(token));

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setLogin(false);
  };

  return (
    <div className="header">
      <div>
        <h3>Home</h3>
      </div>
      <ul className="menu">
        <li>
          <Link to={'/categories'}>Categories</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>

        <li>
          {!isLogin ? (
            <Link to={'/sign-in'}> Sign In</Link>
          ) : (
            <Link to={''} onClick={handleSignOut}>
              Sign Out
            </Link>
          )}
        </li>
        <li>
          <Link to={'/card'}>
            <Badge count={isLogin ? cardItem.length : 0} showZero>
              <CardIcon width={20} />
            </Badge>
          </Link>
        </li>
      </ul>
    </div>
  );
};
