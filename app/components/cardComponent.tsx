'use client';

import { Card, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';

interface Shoe {
  id: number;
  name: string;
  price: string;
  image: string;
}

const shoes: Shoe[] = [
  {
    id: 1,
    name: "Nike Air Max",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: "$159.99",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80"
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80"
  },
  {
    id: 4,
    name: "New Balance 574",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"
  }
];

interface ShoeCardsProps {
  searchQuery: string;
}

export default function ShoeCards({ searchQuery }: ShoeCardsProps) {
  const filteredShoes = shoes.filter(shoe =>
    shoe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {filteredShoes.map((shoe) => (
          <Grid item key={shoe.id} xs={12} sm={6} md={4} lg={3}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 6
                }
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={shoe.image}
                alt={shoe.name}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="h2">
                  {shoe.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {shoe.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}