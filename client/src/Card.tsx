import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 275,
    margin: 10,
  }
});

export default function SimpleCard({
  title,
  to,
}: {
  title: string;
  to: string;
}) {
  const classes = useStyles();
  const history = useHistory();

 const redirectToPost = () => {
   history.push(to)
 }
  return (
      <Card className={classes.root} variant="outlined" onClick={redirectToPost}>
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
      </Card>
  );
}
