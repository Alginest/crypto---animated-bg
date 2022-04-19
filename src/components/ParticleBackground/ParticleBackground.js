import React from "react";
import useStyles from "./style";
import Particles from "react-tsparticles";
import { useGlobalContext } from "../../context";
import { loadFull } from "tsparticles";
import { Box, IconButton, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
const ParticleBackground = () => {
  const classes = useStyles();
  const { dark } = useGlobalContext();
  const newDate = new Date();
  console.log(newDate);
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};
  return (
    <section className={classes.header}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: dark ? "#222" : "#fff",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: dark ? "#fff" : "#222",
            },
            links: {
              color: dark ? "#fff" : "#222",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Box className={classes.midBox}>
        <Box className={classes.leftBox}>
          <Box className={classes.socialIcons}>
            <IconButton
              aria-label="delete"
              size="medium"
              className={classes.iconButton}
            >
              <FacebookIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              className={classes.iconButton}
            >
              <TwitterIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              className={classes.iconButton}
            >
              <TelegramIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              className={classes.iconButton}
            >
              <EmailIcon fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="delete"
              size="medium"
              className={classes.iconButton}
            >
              <GitHubIcon fontSize="inherit" />
            </IconButton>
          </Box>
          <Typography variant="h4" className={classes.title}>
            Bit Money - Lending & Investment Platform
          </Typography>
          <Box className={classes.btnBox}>
            <button className={classes.leftBtn}>Whitepaper</button>
            <button className={classes.btnRight}>Buy Tokens Now!</button>
          </Box>
        </Box>
        <Box className={classes.rightBox}>
          <Box className={classes.gridCont}>
            <Box className={classes.gridItem}>127</Box>
            <Box className={classes.gridItem}></Box>
            <Box className={classes.gridItem}></Box>
            <Box className={classes.gridItem}></Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default ParticleBackground;
