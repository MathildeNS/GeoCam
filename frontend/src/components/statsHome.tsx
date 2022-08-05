import { Grid,  Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useStatsContext } from "../contexts/statsContext";


const stats = {
    'medias': 9050,
    'sites': 15,
    'dispositifs': 35,
    'annotations': 650
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Stats = () => {
    // const {stats} = useStatsContext();
    return (
        <Grid 
            container
            xs={12}
        >
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom >
                    Mes statistiques
                </Typography>
            </Grid>
            
            <Grid container xs={12} direction ='row' justifyContent='center' alignItems='center'>

                {/* {stats.map(([key, value]) =>  */}
                {Object.entries(stats).map(([key, value]) =>
                    <Grid item xs={3}>
                        <Grid container direction ='column' justifyContent='center' alignItems='center'>
                            <Grid item >
                                <Typography gutterBottom variant = "h2">
                                    {value}
                                </Typography>   
                            </Grid>
                            <Grid item >
                                <Typography gutterBottom variant = "h4">
                                    {key}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Grid>
           
      </Grid>
    )
}
    export default Stats;