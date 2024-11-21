import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import { useContext } from 'react';
import { signInContext } from '../../App';

// type loginProps = {
//   isLoggedIn: boolean,
//   handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
// }
type signInContextType = {
  isLoggedIn: boolean,
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}


function Login() {

  const setIsLoggedIn = useContext<signInContextType>(signInContext);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.email.value === 'me@work.com' && event.currentTarget.password.value === 'pass123') {
      setIsLoggedIn(true);
    } else {
      console.log('Invalid credentials');
    }
    
  };
  

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Paper 
          elevation={3} 
          sx={{ 
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%'
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              placeholder="Email Address*"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              placeholder="Password*"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onSubmit={(event)=>handleSubmit}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Login;
