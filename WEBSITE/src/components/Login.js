import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/home.css';


function Login() {
  const [Loding, setLoding] = useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [errors, setErrors] = useState(null);


  const handleSubmit = async (event) => {
    event.preventDefault();
setErrors(null);


    try {
      setLoding(true);
      const response = await fetch('http://51.20.138.46/account/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const result = await response.json();

      if (response.ok) {
        var AccessToken = result.access
        var RefreshToken = result.refresh

        var expirationDate = new Date('Thu, 31 Dec 2099 23:59:59 GMT');
 
        document.cookie = `access=${AccessToken}; expires=${expirationDate.toUTCString()}; path=/`;
        document.cookie = `refresh=${RefreshToken}; expires=${expirationDate.toUTCString()}; path=/`;

        navigate(`/?username=${username}`);
        window.location.reload();
      } else {
setErrors("کێشەیەک ڕویدا دوبارە هەوڵبدەوە");
      }

      setLoding(false);
    } catch (error) {
setErrors("کێشەیەک ڕویدا دوبارە هەوڵبدەوە");

      console.error('Error:', error);
      setLoding(false);
    }


  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          پەڕەی داخڵبوون
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="بەکاربەر(یوزەرنەیم)"
            name="username" // Use the correct name attribute
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="وشەی تێپەڕ"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors ? (
              <div className="text-danger mt-4 mb-3">
                <div role="alert" className="alert alert-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current shrink-0 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{errors}</span>
                </div>
              </div>
            ) : null}
          {Loding ? (<Button loading variant="contained" className='btn btn-primary' sx={{ mt: 3, mb: 2 }} fullWidth>
            <span className="loading loading-dots loading-lg"></span>
          </Button>
          ) : (<Button
            className='btn btn-primary'
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            داخڵبوون
          </Button>)



          }



          <Link to="/Signup" style={{ textDecoration: 'none' }}>
            <Typography variant="body2" color="primary" style={{ marginTop: '20px', cursor: 'pointer' }}>
              دەتەوێت هەژمار دروستبکەی ؟
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
