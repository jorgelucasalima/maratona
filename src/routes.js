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
const jobs = [
    {
        id: 1,
        name: "Pizza Atlantico",
        "daily-hours": 2,
        "total-hours": 4,
        created_at: Date.now()
    },
    {
        id: 2,
        name: "Pizza do Gordo",
        "daily-hours": 4,
        "total-hours": 23,
        created_at: Date.now()
    }
]


function remainingDays(job) {
    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
        const createDate = new Date(job.created_at)
        const dueDay = createDate.getDate() + Number(remainingDays)
        const dueDateInMs = createDate.setDate(dueDate)
        
        const timeDiffInMs = dueDateInMs - Date.now()
        //transformar milli-InMs em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = math.floor(timeDiffInMs / dayInMs)

        //restam x dias
        return dayDiff
}


//req, res
routes.get('/', (req, res) => {
    //calculo de tempo restante
    const updateJobs = jobs.map((job) => {
    
        
        return job
    })

    

    return res.render(views + '/index', { jobs })

});
routes.get('/job', (req, res) => res.render(views + '/job'));
routes.post('/job', (req, res) => {
    
    const lastId = jobs[jobs.length - 1]?.id || 1;

    jobs.push({
        id: lastId + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now() //atribuindo data    
    })
    return res.redirect('/')
});
routes.get('/job/edit', (req, res) => res.render(views + '/job-edit'));
routes.get('/profile', (req, res) => res.render(views + '/profile', { profile }));


module.exports = routes;