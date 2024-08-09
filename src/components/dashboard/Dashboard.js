import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TableFooter,
  IconButton,
  Box,
} from '@mui/material';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

// Sample data
const dataLineChart = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

const dataBarChart = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
];

const dataTable1 = [
  { id: 1, name: 'Item 1', value: 100 },
  { id: 2, name: 'Item 2', value: 200 },
  { id: 3, name: 'Item 3', value: 300 },
];

const dataTable2 = [
  { id: 1, category: 'A', amount: 50 },
  { id: 2, category: 'B', amount: 75 },
  { id: 3, category: 'C', amount: 100 },
];

const Header = () => (
  <Paper
    sx={{
      padding: 3,
      mb: 4,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#3a3a3a',
      color: '#fff',
      borderRadius: 2,
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Typography variant="h4" gutterBottom>
      Dashboard
    </Typography>
    <Box>
      <IconButton color="inherit">
        <NotificationsIcon />
      </IconButton>
      <IconButton color="inherit">
        <AccountCircleIcon />
      </IconButton>
    </Box>
  </Paper>
);

const Footer = () => (
  <Paper
    sx={{
      padding: 2,
      mt: 4,
      backgroundColor: '#3a3a3a',
      color: '#fff',
      borderRadius: 2,
      textAlign: 'center',
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} React Redux App
    </Typography>
  </Paper>
);

const SimpleTable = ({ title, data, columns }) => (
  <Paper
    sx={{
      padding: 3,
      borderRadius: 2,
      backgroundColor: '#fff',
      mb: 4,
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <TableContainer sx={{ maxHeight: 300 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>#</TableCell>
            {columns.map((column, index) => (
              <TableCell key={index} sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={row.id}
              hover
              sx={{
                backgroundColor: rowIndex % 2 === 0 ? '#f9f9f9' : '#f0f0f0',
              }}
            >
              <TableCell sx={{ fontWeight: 'bold' }}>{rowIndex + 1}</TableCell>
              {Object.values(row).map((value, index) => (
                <TableCell key={index}>{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={columns.length + 1} align="center" sx={{ backgroundColor: '#f0f0f0' }}>
              Footer Content
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  </Paper>
);

const Dashboard = () => {
  return (
    <Container sx={{ mt: 4, mb: 4, padding: 0 }}>
      <Header />

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              borderRadius: 2,
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Line Chart
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dataLineChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#1976d2" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              borderRadius: 2,
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Bar Chart
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataBarChart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#1976d2" radius={[10, 10, 0, 0]} />
                <Bar dataKey="pv" fill="#82ca9d" radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <SimpleTable title="Table 1" data={dataTable1} columns={['id','Name', 'Value']} />
        </Grid>
        <Grid item xs={12}>
          <SimpleTable title="Table 2" data={dataTable2} columns={['id','Category', 'Amount']} />
        </Grid>
      </Grid>

      <Footer />
    </Container>
  );
};


export default Dashboard;
