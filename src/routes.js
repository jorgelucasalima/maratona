const express = require('express')
const routes = express.Router()

const views = __dirname + '/views'

const profile = {
    name: "Jorge",
    avatar: "https://avatars.githubusercontent.com/u/47228656?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year":4

}

//array dos jobs, exemplo: req.body { name: 'estudar', 'daily-hours': '2', 'total-hours': '4' }
const jobs = []

//req, res
routes.get('/', (req, res) => res.render(views + '/index'));
routes.get('/job', (req, res) => res.render(views + '/job'));
routes.post('/job', (req, res) => {
    
    const job = req.body
    job.createdAt = Date.now() //atribuindo data
    
    
    jobs.push(req.body)
    return res.redirect('/')
});
routes.get('/job/edit', (req, res) => res.render(views + '/job-edit'));
routes.get('/profile', (req, res) => res.render(views + '/profile', { profile }));


module.exports = routes;