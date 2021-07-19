import express from "express";
import request from "request";
import cheerio from "cheerio";

const app = express();
const url = "https://pinterest.com/";

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json({
    mesg: " Pintrest Scrapper By Sai kishore ",
    routes: {
      Info: req.protocol + '://' + req.get('host')+"/api/:username/:boardName/info",
      Pins: req.protocol + '://' + req.get('host')+"/api/:username/:boardName/pins",
    },
  });
});

app.get("/api/:boardName", (req, res) => {
 
  res.json({ BoardName: req.params.boardName });
});

/*
 * Get Info of pins count and title
 */


/** 
 * @param username - Pinterest Username
 * @param boardName - Pinterest Username you wanna scrape
 */
app.get("/api/:username/:boardName/info", (req, res) => {
  let title = "";
  request.get(url+req.params.username+'/'+req.params.boardName, (error, response, html) => {
    const $ = cheerio.load(html);
    title = $("h1").text();
    const count: number = parseInt(
      $("header")
        .find('div > div > div[data-test-id="board-count-info"]')
        .text()
        .replace(/\D/g, "")
    );
    res.json({
      title: title,
      totalPins: count,
    });
  });
});



/** 
 * @param username - Pinterest Username
 * @param boardName - Pinterest Username you wanna scrape
 */
app.get("/api/:username/:boardName/pins", (req, res) => {
  
  let results: { src: string | undefined; alt: string | undefined }[] = [];
  request.get(url+req.params.username+'/'+req.params.boardName, async (error, response, html) => {
    const $ = cheerio.load(html);
    $("img").each(function (i, image) {
      var re = /236x/gi;
      let src = $(image).attr("src")?.toString().replace(re, "564x");
      let alt = $(image).attr("alt");
      results[i] = { src, alt };
    });
    res.json({ images: results });
  });
});

const port = process.env.PORT || 3000;
console.log("PORT " + port);
app.listen(port, () => console.log(`App Listening on PORT ${port}`));
