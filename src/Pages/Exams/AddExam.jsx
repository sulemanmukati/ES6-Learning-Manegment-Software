
import Sidebar from "../../Layout/Sidebar";

import { Box, Grid, Paper, Typography } from "@mui/material";

function AddExam() {
    const classes = Array.from({ length: 10 }, (_, i) => `Class ${i + 1} Results`);
    const content = () => {
        return (
            <Box
            sx={{
              padding: 2,
              width: { xs: '100%', sm: '90%', md: '80%' },
              margin: '0 auto',
            }}
          >
            <Typography variant="h3" align="center" gutterBottom>
              Exam Results
            </Typography>
      
            <Grid container spacing={3}>
              {classes.map((classTitle, index) => (
                <Grid item xs={12} key={index}>
                  <Typography sx={{ fontWeight: 600, mb: 1 }}>
                    {classTitle}
                  </Typography>
                  <Paper elevation={5}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-around',
                        p: 2,
                      }}
                    >
                      <Typography variant="body1" sx={{ fontWeight: 600, flex: 1 }}>
                        Student Name
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600, flex: 1 }}>
                        Roll Number
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600, flex: 1 }}>
                        Grade
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
            );
        }
        return (
            <>
            <Sidebar element={content()} breadcrumbLink="Exams" pageName="Exam Result" breadcrumbNestedLink="Exam Result" />
        </>
    )
}

export default AddExam

     