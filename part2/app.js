const express = require('express');
const path = require('path');
const errorController = require('./controllers/error');



const run = () => {
    
    const app = express();

    // ------------------- SETTINGS FOR HANDLEBARS -----------------------

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

    // --------------------------------------------------------------------


    app.set('view engine', 'ejs');
    // app.set('view engine', 'pug');
    app.set('views', path.join(__dirname, 'views'), )


    const adminRoutes = require('./routes/admin');
    const shopRoutes = require('./routes/shop');

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/admin', adminRoutes);
    app.use(shopRoutes);

    app.use(errorController.get404)


    app.listen(3002, () => {
        console.log('Starting... Server is running at port 3002');
    });
}

module.exports = {
    run: run
}