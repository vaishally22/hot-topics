// GET THE REFERENCES

const container = document.querySelector('.container');
const tag = document.querySelector('.tagline h1');
const img = document.querySelector('.header-img')
const links = document.querySelectorAll('nav a');
let url = './partials/articles.html';

// ////////////////////////////

const loadContent = (event) => {

    event.preventDefault();
    let t = event.target.textContent;

    if (t === "Portfolio") {
        let tagline = "MY Portfolio";
        let url = './partials/portfolio.html';

        //Default load Articles
        fetch(url).then(function (response) {

                //Turn the response into text 

                return response.text();

            }).then(function (data) {

                container.innerHTML = data;
                tag.innerHTML = tagline;
                document.getElementById('bg').style.backgroundImage = "url('./img/port-mast.jpeg')";

            })

            // Error will hokd anything  wrong 

            .catch(function (error) {
                console.log(error.message);
            });

    } else if (t === "Home") {
        let tagline = "Current Affairs to know";


        //Default load Articles
        fetch(url).then(function (response) {
                return response.text();

            }).then(function (data) {

                container.innerHTML = data;
                tag.innerHTML = tagline;
                document.getElementById('bg').style.backgroundImage = "url('./img/coin.jpg')";

            })
            // Error will hokd anything wrong

            .catch(function (error) {
                console.log(error.message);
            });

    }

}


const selectContent = () => {

    let tagline = "Current Affairs to know";


    //Default load Articles
    fetch(url).then(function (response) {
            //Turn the response into text and pass to the data parameter
            return response.text();

        }).then(function (data) {

            container.innerHTML = data;
            tag.innerHTML = tagline;
            document.getElementById('bg').style.backgroundImage = "url('./img/coin.jpg')";

        })
        // Error will hokd anything the goes wrong in the process
        .catch(function (error) {
            console.log(error.message);
        });
}


for (let l of links) {
    l.addEventListener("click", loadContent);
}


selectContent();
