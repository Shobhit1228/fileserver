const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://shobhit:Shobhit@2884@cluster0.dbbievv.mongodb.net/file_upload?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
