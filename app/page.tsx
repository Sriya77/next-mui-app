'use client';
import { Container, Box ,Typography } from "@mui/material";
import Navbar  from "./components/main-menu";
import ShoeCards from "./components/cardComponent"
import { CssBaseline } from '@mui/material';
import { useState } from 'react';


export default function Home() {

    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = (query: string) => {
      setSearchQuery(query);
    };
  
  return (
    <div>
     <CssBaseline />
     <Navbar onSearch={handleSearch} />

    <Container sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding:'2%'
      }}>
      <Box>
      <ShoeCards searchQuery={searchQuery} />
      </Box>
    </Container>
   </div>
  );
}
