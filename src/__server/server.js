const express = require("express");
const cors = require("cors");

const app = express()

app.use(cors());
app.use(express.json())

app.get('/data', function (req, res) {
    setTimeout(() => {
        if (req.query.error) {
            res.status(400);
            res.send();
            return;
        }
        const item = {
            name: 'Ali Faris',
            birthDate: '1993-09-27',
            country: 'Iraq',
            city: 'Najaf',
            jobTitle: 'Software Engineer',
            image: 'https://media.moddb.com/images/members/5/4550/4549205/duck.jpg',
            githubProfile: 'https://github.com/alicompiler',
            skills: [
                'Typescript',
                'React',
                'ASP.NET Core',
                'NodeJS'
            ],
            email: 'ali@email.com',
            phone: '+964780123456789',
            about: 'Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.\n'
        };
        res.json(item);
    }, 2000);
});

app.listen(8080, function () {
    console.log('starting wbox-forms test server');
});
