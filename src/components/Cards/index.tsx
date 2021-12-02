import './style.scss';
import HomeCard from './HomeCard'
import Grid from "@mui/material/Grid";
import { Container } from '@mui/material';


function Cards() {

    return (
        <Container maxWidth="lg" sx={{mt: 6, mb: 8}}>
            <Grid container >
                <Grid item md={4}>
                    <HomeCard /> 
                </Grid>
                <Grid item md={4}>
                    <HomeCard /> 
                </Grid>
                <Grid item md={4}>
                    <HomeCard /> 
                </Grid>
            </Grid>
      </Container>
    )
}

export default Cards;