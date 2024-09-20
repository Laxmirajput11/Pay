const express = require('express');
const bodyParser = require('body-parser');
const Stripe = require('stripe');

const stripe = Stripe('sk_test_51PjH1yRrnP9Y0TOUdbw2J0kt5AOXlDXyNfrbsleXYPnZd5aZzoGLHuOLbir8axnWzxgDkNXvXTZIUYuVrZzPklOt00BoStBks1');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body;
t
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', 
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
