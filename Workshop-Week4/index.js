var express = require("express")
var app = express()
var port = process.env.port || 3000;
let cors = require("cors");
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


const cardList = [
    {
        title: "Galaxy Wonders",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Galaxy_blue.jpg",
        link: "Learn more",
        description: "Explore the breathtaking beauty of distant galaxies."
    },
    {
        title: "Astronaut Life",
        image: "https://t3.ftcdn.net/jpg/01/32/36/62/360_F_132366202_h29Ryf57rEoh0GRLQQUHzNrSW3vWBEyj.jpg",
        link: "Discover more",
        description: "Learn what it's like to live in space as an astronaut."
    },
    {
        title: "Rocket Science",
        image: "https://media.istockphoto.com/id/1344443930/photo/space-shuttle-rocket-launch-in-the-sky-and-clouds-to-outer-space-sky-and-clouds-spacecraft.jpg?s=612x612&w=0&k=20&c=lYoFwMF9Sc6q07skiz6WaVovoseHk6M1tDr5qeecRjI=",
        link: "Read more",
        description: "Understand the mechanics behind space exploration."
    }
];

const ProjectSchema = new mongoose.Schema({
    title: String,
    image: String,
    link: String,
    description: String,
    });
    const Project = mongoose.model('Project', ProjectSchema);
    

    app.get('/api/projects', async (req, res) => {
        const projects = await Project.find({});
        res.json({ statusCode: 200, data: projects, message: "Success" });
        });
        

var port = 5500;

app.listen(port,()=>{
console.log("App listening to: "+port)
})

mongoose.connect('mongodb://localhost:27017/myprojectDB');

mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB!');
        });

// inserted sample data here
const sampleProject = new Project({
    title: "Kitten 4",
    image: "images/kitten-4.jpg",
    link: "About Kitten 4",
    description: "Demo description about kitten 4"
    });
    sampleProject.save().then(() => console.log("Sample project saved!"));
    
        
    