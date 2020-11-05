import React from 'react';
import { Grid, Typography, Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';
import _blank from '../../Assets/Images/Blank.png';
import useStyles from './ProjectStyle';

function Project() {
  const classes = useStyles();
  const loremIps = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation`;
  const project = [
    { title: 'NAMA PROJECT', subtitle: 'BIDANG SERVICENYA', img: _blank, content: loremIps },
    { title: 'NAMA PROJECT', subtitle: 'BIDANG SERVICENYA', img: _blank, content: loremIps },
    { title: 'NAMA PROJECT', subtitle: 'BIDANG SERVICENYA', img: _blank, content: loremIps },
  ];

  return (
    <>
      <div className={classes.HeaderImage}>
        <Typography align="center" className={classes.PageTitle}>
          Project
        </Typography>
      </div>
      <Grid container alignContent="center" justify="center" className={classes.Content}>
        <Grid item xs={12}>
          <Typography align="center" className={classes.OngoingTitle} component="p">
            Our Ongoing Project
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            {project.map((value, index) => (
              <Grid key={index} item>
                <Card className={classes.Card}>
                  <CardMedia image={value.img} className={classes.CardMedia} title={value.title} />
                  <CardContent>
                    <Grid container direction="row" justify="center" alignContent="center">
                      <Grid item xs lg>
                        <Typography gutterBottom className={classes.CardContentTitle} component="p">
                          {value.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={6} lg={5}>
                        <Typography gutterBottom className={classes.CardContentSubtitle} component="p">
                          {value.subtitle}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography component="p" className={classes.CardContentBody}>
                      {value.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Project;
