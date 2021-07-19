"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var request_1 = __importDefault(require("request"));
var cheerio_1 = __importDefault(require("cheerio"));
var app = express_1.default();
var url = "https://pinterest.com/";
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get("/", function (req, res) {
    res.json({
        mesg: " Pintrest Scrapper By Sai kishore ",
        routes: {
            Info: req.protocol + '://' + req.get('host') + "/api/:username/:boardName/info",
            Pins: req.protocol + '://' + req.get('host') + "/api/:username/:boardName/pins",
        },
    });
});
app.get("/api/:boardName", function (req, res) {
    res.json({ BoardName: req.params.boardName });
});
/*
 * Get Info of pins count and title
 */
/**
 * @param username - Pinterest Username
 * @param boardName - Pinterest Username you wanna scrape
 */
app.get("/api/:username/:boardName/info", function (req, res) {
    var title = "";
    request_1.default.get(url + req.params.username + '/' + req.params.boardName, function (error, response, html) {
        var $ = cheerio_1.default.load(html);
        title = $("h1").text();
        var count = parseInt($("header")
            .find('div > div > div[data-test-id="board-count-info"]')
            .text()
            .replace(/\D/g, ""));
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
app.get("/api/:username/:boardName/pins", function (req, res) {
    var results = [];
    request_1.default.get(url + req.params.username + '/' + req.params.boardName, function (error, response, html) { return __awaiter(void 0, void 0, void 0, function () {
        var $;
        return __generator(this, function (_a) {
            $ = cheerio_1.default.load(html);
            $("img").each(function (i, image) {
                var _a;
                var re = /236x/gi;
                var src = (_a = $(image).attr("src")) === null || _a === void 0 ? void 0 : _a.toString().replace(re, "564x");
                var alt = $(image).attr("alt");
                results[i] = { src: src, alt: alt };
            });
            res.json({ images: results });
            return [2 /*return*/];
        });
    }); });
});
var port = process.env.PORT || 3000;
console.log("PORT " + port);
app.listen(port, function () { return console.log("App Listening on PORT " + port); });
