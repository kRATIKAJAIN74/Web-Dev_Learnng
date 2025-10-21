 import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

 export default function InfoBox({info}) {
  const INIT_URL = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee";

  const HOT_URL = "https://images.unsplash.com/photo-1466995937966-2e6f29c6ed60?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000";
  const  COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=1000";
  const RAIN_URL = "https://images.unsplash.com/photo-1599806112354-67f8b5425a06?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000";

 
  return (
    <div className="InfoBox">
  <div className='card'>
  <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80
           ? RAIN_URL 
           : info.temp > 15 
           ? HOT_URL 
           : COLD_URL
          }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80
           ? <BeachAccessIcon/> 
           : info.temp > 15 
           ? <SunnyIcon/> 
           : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
         <p>Temperature = {info.temp}&deg;C</p>
         <p>Humidity = {info.humidity}</p>
         <p>TempMax = {info.tempMax}&deg;C</p>
         <p>TempMin = {info.tempMin}&deg;C</p>
         <p>FeelsLike = {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  )
}



