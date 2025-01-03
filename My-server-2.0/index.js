const { json } = require('body-parser');
const express = require('express');

const app = express();

const stripe = require('stripe')('sk_test_51QJq52K3k7jnYePVH4JYACD3KXr4kqXaHDSzRQQRMKmV4YgUSbVh44xulTYL8frPfg5ClfjzvkINmqU1i50X6R6l00QHOT7xH5')


bodyParser = require('body-parser');
// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create-checkout-session', async (req, res) => {
    let obj = JSON.parse(req.body.total)
    console.log(obj);

    const final = []

    for(var k of obj.products) {
        final.push({
            price_data: {
                currency: 'usd',
                product_data: {
                  name: k.title,
                },
                unit_amount: k.price * 100,
              },
              quantity: k.quantity,
        })
    }
    const session = await stripe.checkout.sessions.create({
      line_items: final, 
      mode: 'payment',
      success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/cancel',
    });
  
    res.redirect(303, session.url);
  });



app.set('view engine', 'ejs');

app.set('views', "./views");

app.get('/', (req,res)=> {
    // res.send('Welcome to the Express Server!'),
    res.render('header');
})

app.get('/home', (req,res)=> {
    res.render('home');
})

app.get('/contact', (req,res)=> {
    res.render('contact');
})

app.get('/about', (req,res)=> {
    res.render('about');
})


app.listen(1111,console.log("server running..."));