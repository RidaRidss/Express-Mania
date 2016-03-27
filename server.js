var express = require('express'),
app = express();
app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);
 app.get('/',function(req,res){res.render('index.html')}); 
app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});