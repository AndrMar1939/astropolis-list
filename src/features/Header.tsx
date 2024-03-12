import { FC } from 'react';
import { Tab, Tabs, Divider, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';

const buttonStyles = {
  position: 'absolute',
  top: '50%',
  right: { xs: '10px', md: '30px' },
  transform: 'translateY(-50%)',
};

interface HeaderProps {
  setIsVisible: (value: boolean) => void;
}

export const Header: FC<HeaderProps> = ({ setIsVisible }) => {
  const { pathname } = useLocation();
  const isOpenFilterButtonVisible = '/list' === pathname;

  return (
    <header
      style={{
        position: 'relative',
      }}
    >
      <Tabs value={pathname}>
        <Tab label="Home" value={'/'} component={Link} to="/" />

        <Tab label="List" component={Link} to="/list" value={'/list'} />
      </Tabs>

      {isOpenFilterButtonVisible && (
        <Button
          sx={buttonStyles}
          variant="contained"
          color="primary"
          onClick={() => setIsVisible(true)}
        >
          <FilterListIcon />
        </Button>
      )}

      <Divider />
    </header>
  );
};
