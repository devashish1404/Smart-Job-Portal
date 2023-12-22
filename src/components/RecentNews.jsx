import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container,Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Bgimg from "../assets/images/1900x600.jpeg"

const Article = () => {
    return (
        <Container >
          <Box sx={{marginTop:{xs:'25%',md:'2%'}}}>
            <h3 style={{ textAlign: 'center', fontWeight: '112px' ,marginTop:{xs:'5%',md:'0%'}}}>Recent News Articles</h3>
            <h5 style={{ textAlign: 'center', color: 'gray' }}>Fresh job-related news content posted each day</h5>
            </Box>
            <Grid container spacing={2} justifyContent="space-around">
                {[1, 2, 3].map((index) => (
                    <Grid item xs={4} key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 200 }}
                                component="img" // Use the component prop to specify 'img'
                                src={Bgimg} // Replace 'picture' with the image source
                                alt="image"

                            />
                            <CardContent sx={{ display: 'flex', flexDirection: 'row' }}>
                                <Typography gutterBottom fontSize="12px" component="div" fontWeight="bold" color="text.secondary">
                                    August 31, 2021
                                </Typography>
                                &nbsp;&nbsp;
                                <Typography> <ul>
                                    <li>12 comment</li>
                                </ul>
                                </Typography>   
                            </CardContent>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    <p style={{ fontWeight: 'bold' }}>Article Title</p>
                                    A job ravenously while far much that one rank beheld after outside ...
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Read More </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Article;