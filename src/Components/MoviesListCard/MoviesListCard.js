import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';





const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        width: '20%',
        height: '30vw',
        margin: 10
    },
    media: {
        height: 140,
    },
});


const MoviesListCard = ({ movie }) => {

    const classes = useStyles();




    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    title={movie.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {movie.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export {MoviesListCard};