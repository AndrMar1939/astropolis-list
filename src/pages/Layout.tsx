import { useState, FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Box, Divider } from '@mui/material';
import { Header, Footer } from '../features';
import { Filter } from '../features';

interface LayoutProps {
  activeFilter: string;
  setActiveFilter: (value: string) => void;
}

export const Layout: FC<LayoutProps> = ({ activeFilter, setActiveFilter}) => {
  const [isFilterMenuVisible, setIsFilterMenuVisible] = useState(false);

  return (
    <>
      <Box
        sx={{
          position: 'sticky',
          top: '0',
          background: 'white',
          zIndex: 1000,
        }}
      >
        <Header setIsVisible={setIsFilterMenuVisible} />
      </Box>

      <Container
        sx={{
          position: 'relative',
          flexDirection: 'column',
        }}
      >
        <Box
          component={'main'}
          sx={{
            mt: 4,
            mb: 6,
            flexGrow: 1,
          }}
        >
          <Outlet />
        </Box>
      </Container>

      <Box
        sx={{
          position: 'fixed',
          width: '100%',
          bottom: 0,
          left: 0,
          background: 'white',
          zIndex: 1000,
        }}
      >
        <Divider />

        <Footer />
      </Box>

      <Filter
        isVisible={isFilterMenuVisible}
        setIsVisible={setIsFilterMenuVisible}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
    </>
  );
};
