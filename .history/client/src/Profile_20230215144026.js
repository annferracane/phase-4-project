/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
// import { makeStyles } from "@material-ui/core/styles";
import Tooltip from '@mui/material/Tooltip';
// @material-ui/icons
import Add from '@mui/icons-material/Add';

// core components
import Grid from '@mui/material/Grid';
// import Clearfix from "components/Clearfix/Clearfix.js";
import Button from '@mui/material/Button';



// import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

// const useStyles = makeStyles(profilePageStyle);

function Profile({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

//   const classes = useStyles();
//   const imageClasses = classNames(
//     classes.imgRaised,
//     classes.imgRoundedCircle,
//     classes.imgFluid
//   );
//   const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  
  return (
    <div>
      <div>
      {/* <div className={classNames(classes.main, classes.mainRaised)}> */}
        {/* <div className={classes.container}> */}
        <div>
          <Grid justify="center">
            <Grid item xs={12} sm={12} md={6}>
              {/* <div className={classes.profile}> */}
              <div>
                <div>
                  {/* <img src="assets/img/faces/christian.jpg" alt="..." className={imageClasses} /> */}
                  <img src="assets/img/faces/christian.jpg" />
                </div>
                {/* <div className={classes.name}> */}
                <div>
                  {/* <h3 className={classes.title}>Christian Louboutin</h3> */}
                  <h3>Christian Louboutin</h3>
                  <h6>DESIGNER</h6>
                  <Button
                    justIcon
                    simple
                    color="dribbble"
                    // className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-dribbble"} />
                    <i className={classes.socials + " fab fa-dribbble"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="twitter"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="pinterest"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-pinterest"} />
                  </Button>
                </div>
              </div>
              <div className={classes.follow}>
                <Tooltip
                  id="tooltip-top"
                  title="Follow this user"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    round
                    color="primary"
                    className={classes.followButton}
                  >
                    <Add className={classes.followIcon} />
                  </Button>
                </Tooltip>
              </div>
            </Grid>
          </Grid>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              An artist of considerable range, Chet Faker — the name taken by
              Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
              and records all of his own music, giving it a warm, intimate feel
              with a solid groove structure.{" "}
            </p>
          </div>
          {/* <Clearfix /> */}
        </div>
      </div>
    </div>
  );
}


export default Profile;