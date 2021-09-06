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
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#efe5fd",
    },
    "&:active": {
      backgroundColor: "#d4bff9"
    }
  },
});

export default function Card({
  title,
  author,
  to,
  handleClick,
}: {
  title: string;
  author: string;
  to: string;
  handleClick: (to: string) => void;
}) {
  const classes = useStyles();

  return (
    <MatCard
      className={classes.root}
      variant="outlined"
      onClick={() => handleClick(to)}
    >
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Post</Button>
      </CardActions>
    </MatCard>
  );
}
