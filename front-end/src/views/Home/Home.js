import {useState, useEffect} from 'react';
import './Home.css';
import NewsFeed from '../../components/NewsFeed/NewsFeed';
import Typography from '@mui/material/Typography';
import {
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios';

function Home() {
  const [allocations, setAllocations] = useState([]);
  const [colors, setColors] = useState([]);
  const authHeader = {Authorization: `JWT ${localStorage.getItem('token')}`};
  const [newUserDialogBox, setNewUserDialogBox] = useState(true);

  // API call for mock asset allocation data
  useEffect(() => {
    async function getAllocations() {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/assets`, {headers: authHeader});
      const data = res.data.assets;
      const assetSum = Object.values(data).reduce((sum, current) => sum + current, 0);
      const formattedData = Object.keys(data).reduce((result, current, index) => {
        const entry = {};
        entry.name = current;
        entry.value = parseFloat((Object.values(data)[index] / assetSum).toFixed(2));
        result.push(entry);
        return result;
      }, []);
      setAllocations(formattedData);
    }
    getAllocations();
  }, []);

  useEffect(() => {
    function getRandomColor() {
      return '#' + Math.floor(Math.random()*16777215).toString(16).toString();
    }
    const randomColors = new Array(allocations.length).fill(0).map(() => getRandomColor());
    setColors(randomColors);
  }, [allocations]);

  return (
    <>
      <div id="page-title">
        <Typography variant='h4' fontWeight={'bold'}>Home</Typography>
      </div>
      <div id="page-content">
        <div id="chart">
          <div className="homeHeader">
            <Typography variant='h5'>Asset Allocations</Typography>
          </div>
          <div id="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={allocations} dataKey="value" nameKey="name">
                  {allocations.map((item, index) => (
                    <Cell key={index} stroke={'#000'} strokeWidth={1} fill={colors[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className='divider'></div>
        <div id="news">
          <NewsFeed/>
        </div>
      </div>
    </>
  );
}

export default Home;
