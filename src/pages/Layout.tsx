import { Outlet } from "react-router-dom"
import { Container, Box, Divider } from "@mui/material"
import { Header, Footer } from "../features"

export const Layout = () => {
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
        <Header />
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
    </>
  )
}
