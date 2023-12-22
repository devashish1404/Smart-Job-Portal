import { Box, Typography, Button, Grid, Link } from "@mui/material";
import React from "react";
import Up from "../assets/images/WhatsApp Image 2023-10-29 at 15.45.34 (1).jpeg";
import Low from "../assets/images/WhatsApp Image 2023-10-29 at 15.45.33 (4).jpeg";
import Google from "../assets/images/Gmail.jpeg";
import Facebook from "../assets/images/facebook.jpeg";
import Linkedin from "../assets/images/linkedin.jpeg";
import Group from "../assets/images/WhatsApp Image 2023-10-29 at 15.45.33.jpeg";

import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
// import Divider from "./DividerOr";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const customInputStyle = {
  width: 250,
  maxWidth: "100%", // Make the TextField span the full width
  //   borderRadius: "50% 50% 20% 20%", // Set the border radius to 10%
  border: "1px solid blue",

  marginTop: "2%",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Registeration = () => {
  const UpImage = {
    width: "100%",
    height: "4%",
  };
  // Size of Header and footer
  return (
    <div>
      <Box>
        <Box>
          <img src={Up} alt="up" style={UpImage} />
        </Box>
        <Box sx={{ display: { xs: "block", md: "flex" } }}>
          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              textAlign: "center",
              display: "block",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <img src={Group} alt="up" />
            <Typography sx={{ fontSize: "25px", color: "blue" }}>
              Register With Your Resume
            </Typography>
            <Typography sx={{ marginTop: "1%" }}>
              We will autofill your details
            </Typography>
            <Grid sx={{ marginTop: "3%" }}>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload Resume
                <VisuallyHiddenInput type="file" />
              </Button>
            </Grid>
            <Typography sx={{ marginTop: "5%" }}>
              Supported formats- pdf, doc, docx, csv, rtf, txt files. File size
              should not exceed 5 mb.
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ marginTop: "-7%", color: "black" }}
          >
            Or
          </Divider>

          <Box
            sx={{
              width: { xs: "100%", md: "40%" },
              marginTop: { xs: "3%", md: "-7%" },
              textAlign: "center",
              display: "block",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Typography sx={{ fontSize: "20px", color: "blue" }}>
              Tell Us About Your Self
            </Typography>
            <Typography>It will take only few minutes</Typography>

            <Box sx={{ display: "block" }}>
              <TextField
                placeholder="Name"
                variant="outlined"
                // Apply custom style to the TextField
                sx={{
                  width: "96%",
                  border: "1px solid blue",

                  marginTop: "2%",
                }}
              />
              <TextField
                placeholder="Email"
                variant="outlined"
                sx={{
                  width: "96%",
                  border: "1px solid blue",

                  marginTop: "2%",
                }}
              />
              <TextField
                placeholder="91 | Mobile Number"
                variant="outlined"
                sx={{
                  width: "96%",
                  border: "1px solid blue",

                  marginTop: "2%",
                }}
              />
              <TextField
                placeholder="Password"
                variant="outlined"
                sx={{
                  width: "96%",
                  border: "1px solid blue",

                  marginTop: "2%",
                }}
              />
            </Box>

            <Box sx={{ marginTop: "4%", marginLeft: "3%" }}>
              <FormGroup sx={{ fontSize: "10px" }}>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="By registering you agree to term & condition"
                />
              </FormGroup>
            </Box>
            <Grid  sx={{marginTop:'3%'}}>
              <Button variant="contained">Contunue →</Button>
            </Grid>
            <Grid
              spacing={2}
              sx={{ justifyContent: "space-between", marginTop: "4%" }}
            >
              <img src={Google} alt="up" />
              <img src={Facebook} alt="up" sx={{ marginLeft: "2%" }} />
              <img src={Linkedin} alt="up" sx={{ marginLeft: "2%" }} />
            </Grid>
            <Grid>
              Already Have a Accound <Link to="#">Login</Link>
            </Grid>
          </Box>
        </Box>

        <Box>
          <img src={Low} alt="up" style={UpImage} />
        </Box>
      </Box>
    </div>
  );
};

export default Registeration;