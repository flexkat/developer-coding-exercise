import {
  Card as MatCard,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 275,
    margin: 10,
  }
});

export default function Card({
  title,
  to,
  handleClick
}: {
  title: string;
  to: string;
  handleClick: (to: string) => void;
}) {
  const classes = useStyles();

  return (
      <MatCard className={classes.root} variant="outlined" onClick={() => handleClick(to)}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            "author"
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </MatCard>
  );
}
