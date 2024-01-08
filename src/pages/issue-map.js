import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { useLoadScript, Marker } from "@react-google-maps/api";
import {
  APIProvider, Map, AdvancedMarker, Pin, InfoWindow,
} from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";
import createApiInstance from "../utils/api";

const issuesData = [];
var markersStates = [];

const initial_map_position = { lat: 49.827240, lng: 18.259763 };

const issue_solved_colour = "green";
const marker_background_colour = "LightCoral"

const initializeArray = (length) => Array(length).fill(false);

// Prague
// var min_longitude = 14.308158012079272;
// var min_latitude = 50.077986244198236;
// var max_longitude = 14.330512481341398;
// var max_latitude = 50.09255480429163;

// Ostrava
var min_longitude = 18.119173;
var min_latitude = 49.893346;
var max_longitude = 18.480007;
var max_latitude = 49.746067;

const Page = () => {
  const [open1, set1Open] = useState(false);
  const instance = createApiInstance();
  const [issuesData, setIssuesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [markersStates, setMarkersStates] = useState([]);

  const changeValueAtIndex = (index, newValue) => {
    setMarkersStates((prevStates) => {
      const newStates = [...prevStates]; // Vytvoření kopie stávajícího pole
      newStates[index] = newValue; // Změna hodnoty na konkrétním indexu
      return newStates; // Nastavení nové hodnoty pro stav
    });
  };

  const getIssues = async () => {
    try {
      const issuesResponse = await instance.get('/api/v1/issues/square?min_longitude='+min_longitude+'&min_latitude='+min_latitude+'&max_longitude='+max_longitude+'&max_latitude='+max_latitude);
      console.log(issuesResponse);
      const issuesData = issuesResponse.data.map(issue => ({
        id: issue.id,
        coordinates: {
          latitude: issue.coordinates.latitude,
          longitude: issue.coordinates.longitude
        },
        title: issue.title,
        categoryId: issue.categoryId,
        status: issue.status,
      }));
      setIssuesData(issuesData);
      console.log(issuesData);
      console.log(issuesData[0]);
      console.log(issuesData[0].coordinates);
      console.log(issuesData[0].coordinates.latitude);
    } catch (error) {
      console.error("Error fetching issues:", error);
    } finally {
      setLoading(false);
    }
  };

  const { isLoaded } = useLoadScript( {
    googleMapsApiKey: 'AIzaSyC6-kPQq0Hv7gacfZ_1NenpyS_a1ahV910', 
    libraries: ["places"],
  });
  const [selected, setSelected] = useState(null);

  // Zavola se pokazde, co se nacte stranka
  useEffect(() => {
    const fetchData = async () => {
      await getIssues();
      setMarkersStates(Array(issuesData.length).fill(false));
    };
    fetchData();
  }, []);

  return (
  <>
    <Head>
      <title>
        Issue map | A Better City
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4">
          Issue map
        </Typography>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <APIProvider apiKey="AIzaSyC6-kPQq0Hv7gacfZ_1NenpyS_a1ahV910">
            <div style={{ height: '70vh', width: '100%', position: 'relative' }}>
              <Map zoom={12} center={initial_map_position} mapId="8682b82c7c8bf444">
                <div>
                  {issuesData.map((issue, index) => (
                    <div key={index}>
                      <AdvancedMarker position={{ lat: issue.coordinates.latitude, lng: issue.coordinates.longitude }} onClick={() => changeValueAtIndex(index, true)}>
                        <Pin background={marker_background_colour} borderColor={issue_solved_colour}
                             glyphColor={issue_solved_colour}/>
                      </AdvancedMarker>
                      {
                        markersStates[index] && (<InfoWindow position={{ lat: issue.coordinates.latitude, lng: issue.coordinates.longitude }} onCloseClick={() => changeValueAtIndex(index, false)}>
                          <h4>{issue.title}</h4>
                          <p>ID: {issue.id}</p>
                          <p>Status: {issue.status}</p>
                          <p>Category ID: {issue.categoryId}</p>
                          <a href={'issues/' + issue.id}>See detail</a>
                        </InfoWindow>)
                      }
                      {selected && <Marker position={selected}/>}
                    </div>
                  ))}
                </div>
                {/*{selected && <Marker position={selected} />}*/}
              </Map>
            </div>
          </APIProvider>
        )
        }
      </Container>
    </Box>
  </>
)};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
