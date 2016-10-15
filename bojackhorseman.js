var Horseman = require('node-horseman');
var horseman = new Horseman();
var $ = require('jquery');
var jsonfile = require('jsonfile')


const getDataFromAlexWebsite = function () {
    const projects = [].slice.call(document.querySelectorAll('.mdl-cell.card'))
    var data = projects
        .map(project=>
            project
                .querySelector('.mdl-card__supporting-text .tagline i')
                .innerHTML
        )
    return {data}
}

horseman
    .open('http://www.alxyee.com/')
    //Evaluate only runs in browser so has no scope to horseman and doesn't console
    .evaluate(getDataFromAlexWebsite)
    .then(function (response) {
        console.log(response)
        jsonfile.writeFile('data.json', response, function (err) {
        })
        return horseman.close();
    })
    .catch(err=> {
        console.log(err)
    })
