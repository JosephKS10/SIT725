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

const clickMe = () => {
    alert("Thanks for launching! Keep exploring the cosmos.");
};

const submitForm = () => {
    let formData = {
        first_name: $('#first_name').val(),
        last_name: $('#last_name').val(),
        email: $('#email').val()
    };
    console.log("Form Data Submitted: ", formData);
};

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `
            <div class="col s4 center-align">
                <div class="card medium">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${item.image}">
                    </div>
                    <div class="card-content">
                        <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">more_vert</i></span>
                        <p><a href="#">${item.link}</a></p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
                        <p class="card-text">${item.description}</p>
                    </div>
                </div>
            </div>`;
        $("#card-section").append(itemToAppend);
    });
};

$(document).ready(function() {
    $('.materialboxed').materialbox();
    $('#formSubmit').click(() => {
        submitForm();
    });
    addCards(cardList);
    $('.modal').modal();
});
