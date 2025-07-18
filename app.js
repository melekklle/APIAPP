const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


const data = {
    "Search": [
        {
            "Title": "Avengers: Endgame",
            "Year": "2019",
            "imdbID": "tt4154796",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
        },
        {
            "Title": "Marvel Studios' Avengers: Endgame LIVE Red Carpet World Premiere",
            "Year": "2019",
            "imdbID": "tt10240638",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BM2E4Nzk0NDQtZTFmOC00MDI5LWFmYmEtNWNlMzhkMDA1MzZmXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Endgame and the Latest Captain Marvel Outrage!!",
            "Year": "2019",
            "imdbID": "tt10025738",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BZjg2ZTM3OTgtY2ExMS00OGM4LTg3NDEtNjQ0MjJiZDFmMGFkXkEyXkFqcGdeQXVyMDY3OTcyOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Rifftrax: Avengers: Endgame",
            "Year": "2020",
            "imdbID": "tt16103750",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BN2I4MDZkMDgtNTc2YS00NGE2LWEwZTAtOTlkYTVhYmNlOTNiXkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Endgame (2019)",
            "Year": "2019",
            "imdbID": "tt16416424",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BM2FjYTE1ODctYjE1Yi00MzNmLThmMTEtNjkwOWZjMmY3NjE5XkEyXkFqcGc@._V1_SX300.jpg"
        },
        {
            "Title": "Avengers: Endgame (2019) - Spoiler Full Review",
            "Year": "2019",
            "imdbID": "tt17978032",
            "Type": "movie",
            "Poster": "N/A"
        },
        {
            "Title": "Avengers Endgame: the Butt Plan",
            "Year": "2019",
            "imdbID": "tt10399328",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTQ1OWQzODktMTY3Zi00OTQxLWExOTYtZTNjZjY5ZTY4M2UyXkEyXkFqcGdeQXVyMTAzMzk0NjAy._V1_SX300.jpg"
        }
    ],
    "totalResults": "7",
    "Response": "True"
}


app.get('/api/data', (req, res) => {
    res.status(200).json(data);
});

app.get('/api/data/:imdbID', (req, res) => {
    const imdbID = req.params.imdbID;
    const item = data.Search.find(d => d.imdbID === imdbID);

    if (!item) {
        return res.status(401).json({ message: "Böyle bir veri bulunamadı" });
    }

    res.status(200).json(item);
});

app.post('/api/data', (req, res) => {
    const newItem = {
        Title: req.body.Title,
        Year: req.body.Year,
        imdbID: req.body.imdbID,
        Type: req.body.Type,
        Poster: req.body.Poster
    };

    data.Search.push(newItem);
    res.status(201).json(newItem);
});


app.listen(port,'192.168.151.110', () => {
    console.log(`API http://192.168.151.110:${port}/api/data üzerinde çalışıyor`);
});
