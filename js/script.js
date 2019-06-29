function displayDogs(responseJson){
    
    let imgSources = responseJson.message;

    imgSources.map(src => {
        console.log(src);
        $('.search-result-section .wrapper').append(`
            <div class="dog-image-div">
                <img src="${src}" alt="picture of a dog"
            </div>
        `);    

    });
}

function fetchDogs(numOfDogs){
    
    const url = `https://dog.ceo/api/breeds/image/random/${numOfDogs}`;

    fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            $('.search-result-section .wrapper').html("");    
            displayDogs(responseJson);
            $('.footer-section').show();
        })
        .catch(err =>{
            console.log("Something went wrong: " + err.message);
            $('.search-result-section .wrapper').html(`
            <div class="no-dogs-found">
                No dogs found
            </div>
        `);   
        });

}

function watchForm(){

    $('form').on('submit', function(e){

        e.preventDefault();

        $('.footer-section').hide();

        let numOfDogs = $('#num-of-dogs').val();

        $('.search-result-section .wrapper').html("Searching for dogs...");

        fetchDogs(numOfDogs);

        $('#num-of-dogs').val("3");

    });

}

$(watchForm);