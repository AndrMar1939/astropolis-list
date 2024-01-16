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
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
      >
        <Box 
          component={'main'} 
          sx={{
            flex: 1,
            mt: 4,
            mb: 6,
          }}
        >
          <Outlet />
        </Box>
      </Container>

        <Box
        sx={{
          position: 'sticky',
          width: '100%',
          bottom: '0',
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
