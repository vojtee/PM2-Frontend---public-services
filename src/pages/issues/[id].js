import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    Typography,
    Stack,
    Grid,
    Container,
  } from '@mui/material';
  import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
  import { useState, useEffect } from 'react';
  import ArrowBackIcon from '@mui/icons-material/ArrowBack';
  import IconButton from '@mui/material/IconButton';
  import NextLink from 'next/link';
  import {useAuth} from "src/hooks/use-auth";
  import createApiInstance from "src/utils/api";
  import { useRouter } from 'next/router';
  
  
  
  const IssueDetailPage = () => {
    const router = useRouter();
    const { id } = router.query; 
  
    const getIssue = async (id) => {
      try {
        const issueResponse = await instance.get('/api/v1/issues/' + id);
        console.log(issueResponse.data);
        setIssue({
          id: issueResponse.data.id,
          photo: issueResponse.data.photo,
          coordinates: {
            latitude: issueResponse.data.coordinates.latitude,
            longitude: issueResponse.data.coordinates.longitude
          },
          description: issueResponse.data.description,
          title: issueResponse.data.title,
          authorUid: issueResponse.data.authorUid,
          categoryId: issueResponse.data.categoryId,
          creationDate: issueResponse.data.creationDate,
          status: issueResponse.data.status,
          likeCount: issueResponse.data.likeCount
        });
      } catch (error) {
        console.error("Error fetching issue:", error);
      }
    };
  
    const instance = createApiInstance(useAuth().user.accessToken);
    const [issue, setIssue] = useState(null);
    
    const [buttonText, setButtonText] = useState('Mark as solved');
  
    const [reservedButtonText, setReserveButtonText] = useState('Reserve issue');
    const [isReserveButtonDisabled, setReserveButtonDisabled] = useState(false);
  
  
      const changeStatus = () => {
        if (issue['status'] == 'SOLVED') {
          setIssue((prevIssue) => ({ ...prevIssue, status: 'SOLVING' }));
          setButtonText('Mark as solved');
        } else {
          setIssue((prevIssue) => ({ ...prevIssue, status: 'SOLVED' }));
          setButtonText('Mark as solving');
        }
      }
  
      const reserveIssue = () => {
        setIssue((prevIssue) => ({ ...prevIssue, status: 'SOLVING' }));
        setReserveButtonText('Reserved');
        setReserveButtonDisabled(true);
      }
  
      useEffect(() => {
        if (id) {
          getIssue(id);
        }
      }, [id]);
  
    return (
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Card>
          <CardHeader
            subheader={issue ? '#'+issue.id : null}
            title={issue ? issue.title : null}
              action={
                <IconButton component={NextLink} href="/issues">
                  <ArrowBackIcon />
                </IconButton>
              }
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={6}
              wrap="wrap"
            >
              <Grid
              item
              xs={8}
              >
                <Stack spacing={1}>
                  <Stack>
                  <Typography>
                    {issue ? issue.description : null }
                  </Typography>
                  <img
                    alt="Under development"
                    src={issue ? issue.photo : null}
                    style={{
                      display: 'inline-block',
                      maxWidth: '100%',
                      width: 400
                    }}
                  />
                  </Stack>
                </Stack>
              </Grid>
              <Grid
                item
                xs={4}
              >
                <Stack spacing={1}>
                  <Stack spacing={2}>
                  <Typography>
                    {issue ? issue.coordinates.latitude + " " + issue.coordinates.longitude : null}
                  </Typography>
                  <Typography>
                    {issue ? "Likes: " + issue.likeCount : null}
                  </Typography>
                  <Typography>
                    {issue ? issue.status : null}
                  </Typography>
                  <Typography>
                    {issue ? issue.creationDate.substring(0, 10) : null}
                  </Typography>
                  <div
                    style={{
                      display: 'inline-flex',
                    }}
                  >
                  {/* <Typography>
                    {issue['assignedTo']['name']}
                  </Typography> */}
                  </div>
                  <Button
                    onClick={changeStatus}
                  >
                    {buttonText}
                  </Button>
                  <Button
                    disabled={isReserveButtonDisabled}
                    onClick={reserveIssue}
                  >
                    {reservedButtonText}
                  </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
          </Stack>
        </Container>
      </Box>
    );
  };
  
  IssueDetailPage.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
  export default IssueDetailPage;
  