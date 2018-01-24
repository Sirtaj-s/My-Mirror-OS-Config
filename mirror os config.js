* Magic Mirror Conf
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
    port: 8080,
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.0.106", "::fff:0.0.0.0/1", "::fff:128.0.0.0/2", "::fff:192.0.0.0/3", "::fff:224.0.0.0/4", "192.168.0.0/24",], // Set [] to allow all IP addresses.

    language: "en",
    timeFormat: 24,
    units: "metric",

    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: "clock",
            position: "top_left"
        },
        {
            module: "currentweather",
            position: "top_right",
            config: {
                location: "Toronto",
                locationID: "6087824",
                appid: "XXXXXXXXXXXXXXXX"
            }
        },
        {
            module: "weatherforecast",
            position: "top_right",
            header: "Weather Forecast",
            config: {
                location: "Toronto",
                locationID: "6087824",
                appid: "XXXXXXXXXXXXXXXXXXXXX"
            }
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            config: {
                feeds: [
                    {
                        title: "Business",
                        url: "https://news.google.com/news?cf=all&hl=en&pz=1&ned=ca&topic=b&output=rss"
                    },
                    {
                        title: "CBC World",
                        url: "http://www.cbc.ca/cmlink/rss-world"
                    },
                    {
                        title: "CBC Toronto",
                        url: "http://www.cbc.ca/cmlink/rss-canada-toronto"
                    },
                    {
                        title: "MarketWatch",
                        url: "http://feeds.marketwatch.com/marketwatch/realtimeheadlines?format=xml"
                    },
                    {
                        title: "MarketWatch",
                        url: "http://feeds.marketwatch.com/marketwatch/marketpulse?format=xml"
                    },
                ],
                showSourceTitle: true,
                showPublishDate: true
            }
        },
        {
            module: 'stocks',
                position: 'bottom_bar',
            config: {
                stocks: 'DJI,MSFT,AAPL,GOOG,INTC,CICS,TSLA,FB', // stock symbols
                            updateInterval: 37000 // update interval in milliseconds
            }
        },
        {
            module: 'MMM-Traffic',
            position: 'top_left',
            config: {
                api_key: 'XXXXXXXXXXXXXXXXXXXXXXXX',
                mode: 'driving',
                origin: 'XXXXXXXXXXXXX',
                destination: 'XXXXXXXXXXXXX',
                route_name: 'Home to Work',
                show_summary: 'true',
                ChangeColor: 'true',
                showGreen: 'false',
                interval: 120000,
                traffic_model: 'pessimistic',
                route_name: 'true',
                show_Weekend: 'false',
                allTime: 'false',
                startHr: '5',
                endHr: '17',
                hideOffHours: 'true'
                }
        },
        {
                module: 'MMM-Remote-Control'
                ,position: 'bottom_left
            },
        {
            module: 'calendar_monthly',
            position: 'top_left',
            config: {
            }
        }
    ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
