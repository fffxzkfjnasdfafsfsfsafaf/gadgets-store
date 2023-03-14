import { FC, ReactNode, useContext } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Styles } from '../../types/Styles';
import { LOCAL_IMG_URL } from '../../api/apiProducts';

const styles: Styles = require('./NavigationLink.module.scss');

const {
  NavigationLink: navLink,
  'NavigationLink--dark': navLinkDark,
} = styles.default;

type Props = {
  className?: string;
  direction: 'left' | 'right';
  to: string;
  children?: ReactNode;
};

export const NavigationLink: FC<Props> = ({
  className = '',
  direction,
  to,
  children = null,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Link
      to={to}
      className={cn(
        navLink,
        { [navLinkDark]: theme === 'dark' },
        className,
      )}
    >
      {direction === 'left' && (
        <img
          src={`${LOCAL_IMG_URL}/icons/Arrow_${direction}_${theme}.svg`}
          alt=""
        />
      )}

      {to === '/' ? (
        <img
          src={`${LOCAL_IMG_URL}/icons/Home_${theme}.svg`}
          alt="Home"
        />
      ) : (
        <span>
          {children}
        </span>
      )}

      {direction === 'right' && (
        <img
          src={`${LOCAL_IMG_URL}/icons/Arrow_${direction}_${theme}.svg`}
          alt=""
        />
      )}
    </Link>
  );
};

NavigationLink.defaultProps = {
  className: '',
  children: null,
};
