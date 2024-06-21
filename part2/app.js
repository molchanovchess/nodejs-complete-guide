const express = require('express');
const path = require('path');



const run = () => {
    console.log('Starting part 2: Express. Server is running at port 3002');
    const app = express();
    // const expressHbs = require('express-handlebars').engine;


    // app.engine(
    //     'hbs',
    //     expressHbs({
    //        extname: "hbs",
    //        defaultLayout: "main-layout",
    //        layoutsDir: path.join(__dirname, 'views', 'layouts'),
    //     })
    //  );
    // app.set('view engine', 'hbs');
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'), )


    const adminData = require('./routes/admin');
    const shopRoutes = require('./routes/shop');

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/admin', adminData.routes);
    app.use(shopRoutes);

    app.use((req, res, next) => {
        // res.status(404).sendFile(path.join(__dirname, '/views', '404.html'));
        res.status(404).render('404', {pageTitle: 'Not Found'});

    })


    app.listen(3002);
}

module.exports = {
    run: run
}