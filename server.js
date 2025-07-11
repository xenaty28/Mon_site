

const express = require('express');
const app = express();
const stripe = require('stripe')('SK_TEST_CLÉ_PRIVÉE'); // Remplace avec ta clé secrète Stripe

app.use(express.static('public'));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'eur',
        product_data: {
          name: 'Panier client',
        },
        unit_amount: 4999, // en centimes (ex: 49,99€)
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://ton-site.com/succes.html',
    cancel_url: 'https://ton-site.com/annulation.html',
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Serveur lancé sur http://localhost:4242'));
