import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
  
dotenv.config();

mongoose.connect(process.env.MONGO).then(
  () => {
    console.log('MongoDB connected successfully');
  }
).catch((err) => {
  console.error('MongoDB connection error:', err);
});

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


app.use('/api/user', userRoute);
app.use('/api/auth', authRoute); // This should be replaced with the actual auth route when implemented


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  
  });

});