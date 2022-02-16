import { Card, Container, Grid, Typography } from "@mui/material";
import { cardData } from "./data";

const CustomCard = ({ text, title, icon }) => (
  <Card
    style={{
      color: "#000",
      backgroundColor: "#000",
      margin: 10,
      padding: "30px 50px",
      boxShadow: "",
      borderRadius: 15,
      boxShadow: "5px 5px 15px 3px rgba(0,0,0,0.41)",
      textAlign: "left",
    }}
  >
    <Container
      style={{
        color: "#7b5eea",
        fontSize: 25,
        marginBottom: 15,
        display: "flex",
        width: "fit-content",
        marginLeft: 0,
        paddingLeft: 0,
      }}
    >
      {icon}
    </Container>

    <Typography variant="h4" style={{ color: "#fff", fontSize: 23 }}>
      {title}
    </Typography>
    <Typography
      variant="body2"
      style={{ fontSize: 13, marginTop: 10, color: "#b5b5b5" }}
    >
      {text}
    </Typography>
  </Card>
);
const Featured = () => {
  return (
    <section className="wpb_row vc_row-fluid vc_custom_1531732809616 vc_row-has-fill">
      <div className="container">
        <Container>
          <Grid container>
            {cardData.map((item) => (
              <Grid item md={4} sm={6} xs={12} key={item}>
                {" "}
                <CustomCard {...item} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </section>
  );
};
export default Featured;
