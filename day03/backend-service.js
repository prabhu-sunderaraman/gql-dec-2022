let app = require('express')();
app.get('/hello/:name', (req, res) => {
    let message = `Hello ${req.params.name}`;
    res.end(message);
});

app.listen(9090, () => {
    console.log("Backend service running in 9090");
});