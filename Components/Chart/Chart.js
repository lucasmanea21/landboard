import { Card, Container, Typography, Grid } from "@mui/material";
import Countdown from "react-countdown";
const Time = ({ number, time }) => (
  <Container
    style={{
      backgroundColor: "#1b1b1c",
      color: "#fff",
      margin: 5,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      margin: 5,
      padding: "10px 0",
      borderRadius: 15,
    }}
  >
    <Typography variant="h4" style={{ color: "#FFf" }}>
      {number}
    </Typography>
    <Typography
      style={{ color: "#7b5eea", fontSize: 13, textTransform: "uppercase" }}
    >
      {time}
    </Typography>
  </Container>
);

const Chart = () => {
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid item md={2.5} xs={12}>
              <Time number={days} time="Days" />
            </Grid>
            <Grid item md={2.5} xs={12}>
              <Time number={hours} time="Hours" />
            </Grid>
            <Grid item md={2.5} xs={12}>
              <Time number={minutes} time="Minutes" />
            </Grid>
            <Grid item md={2.5} xs={12}>
              <Time number={seconds} time="Seconds" />
            </Grid>
          </Grid>
        </Container>
      );
    }
  };

  return (
    <section
      className="wpb_row vc_row-fluid vc_custom_1527674710557 vc_row-has-fill"
      style={{ padding: "0 !important", paddingBottom: "100px !important" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000",
            color: "#fff",
            padding: "50px",
            borderRadius: 15,
            maxWidth: "800px",
            width: "80%",
          }}
        >
          <Typography
            variant="h5"
            style={{
              color: "#fff",
              textTransform: "none",
              marginBottom: 25,
              textAlign: "center",
            }}
          >
            Token presale #1
          </Typography>
          <Countdown date={1645466400000} renderer={renderer} />
          <div className="header-btn" style={{ marginTop: 40 }}>
            <a
              className="btn btn-primary js-tilt"
              href="https://landboard.io/presale"
              role="button"
              data-tilt-perspective={300}
              data-tilt-speed={700}
              data-tilt-max={24}
            >
              <span>Launch App</span>
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
};
export default Chart;
