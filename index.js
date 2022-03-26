const axios = require("axios")
const cheerio = require("cheerio")
const express = require("express")

const app= express()
const url = "https://www.theguardian.com/international"

axios(url).then(response => {
    const html = response.data
    const $= cheerio.load(html)
    const articles = []
    console.log(articles)
    $('.fc-container__inner',html).each(function(){
        const title =$(this).find('a').text()
        const url=$(this).find('a').attr('href')
        articles.push({
            title,
            url
        })
    })
    console.log(articles)
}).catch(err => console.log(err))


app.listen(3000, () => console.log("Port is running!!"))