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
  useTheme,
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
import Header from '../header/Header';
import Footer from '../footer/Footer';
import {
  amountData,
  monthlyLineChart,
  productData,
  salesBarChart,
} from '../../common/Constant';



const SimpleTable = ({ title, data, columns }) => {
  const theme = useTheme(); // Use theme hook for dynamic styling

  return (
    <Paper
      sx={{
        padding: 3,
        borderRadius: 2,
        backgroundColor: theme.palette.background.paper,
        mb: 4,
        boxShadow: theme.shadows[5],
        width: '100%',
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
        {title}
      </Typography>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell sx={{ backgroundColor: theme.palette.divider, fontWeight: 'bold' }}>#</TableCell>
              {columns.map((column, index) => (
                <TableCell key={index} sx={{ backgroundColor: theme.palette.divider, fontWeight: 'bold' }}>
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
                  backgroundColor: rowIndex % 2 === 0 ? theme.palette.background.default : theme.palette.background.paper,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <TableCell sx={{ fontWeight: 'bold' }}>{rowIndex + 1}</TableCell>
                {Object.values(row).map((value, index) => (
                  <TableCell key={index}>{value}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

const Dashboard = () => {
  const theme = useTheme(); // Use theme hook for dynamic styling

  return (
    <Container maxWidth={false} sx={{ mt: 4, mb: 4, padding: 0, width: '100%' }}>
      <Header />

      <Grid container spacing={6}> {/* Increased spacing to add more space between the left and right charts */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              borderRadius: 2,
              boxShadow: theme.shadows[5],
              width: '100%',
              mb: 4,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
              Monthly Visitors
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyLineChart} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.grey[300]} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="visitors" stroke={theme.palette.primary.main} strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 3,
              borderRadius: 2,
              boxShadow: theme.shadows[5],
              width: '100%',
              mb: 2,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
              Sales by Product
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesBarChart}>
                <CartesianGrid strokeDasharray="3 3" stroke={theme.palette.grey[300]} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill={theme.palette.primary.main} />
                <Bar dataKey="profit" fill={theme.palette.success.main} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <SimpleTable title="Product Sales Data" data={productData} columns={['Id', 'Product', 'Price']} />
        </Grid>
        <Grid item xs={12}>
          <SimpleTable title="Amount Data" data={amountData} columns={['Id', 'Category', 'Amount']} />
        </Grid>
      </Grid>

      <Footer />
    </Container>
  );
};

export default Dashboard;
