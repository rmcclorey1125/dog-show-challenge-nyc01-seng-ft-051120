document.addEventListener('DOMContentLoaded', () => {

    // + fetch request to dogs
    // + render dogs onto page

    // + put dog onto table as a row
    // + <tr><td>Dog *Name*</td> <td>*Dog Breed*</td> <td>*Dog Sex*</td> <td><button>Edit</button></td></tr>

    // + click listener for edit button next to dog
    // + populate form with current info

    // submit listener patch request to http://localhost:3000/dogs/:id 
    // then have table reflect changes
    // 

    const tableBody = document.querySelector("#table-body")

    fetch("http://localhost:3000/dogs")
    .then(response => response.json())
    .then(dogs => {
        renderDogs(dogs)
    })

    function renderDogs(dogs){
        dogs.forEach(dog =>{
            renderDog(dog)
        })
    }

    function renderDog(dog){
        const dogList = document.createElement('tr')
        dogList.innerHTML = `
            <td class = "name">${dog.name}</td> 
            <td class = "breed">${dog.breed}</td> 
            <td class = "sex">${dog.sex}</td> 
            <td><button class = "edit" id = "${dog.id}">Edit Dog</button></td>
            `
        tableBody.append(dogList)
    }

    document.addEventListener("click", function(e){
        const dogForm = document.querySelector("#dog-form")
        if(e.target.className === "edit"){
            const dog = e.target
            console.log(dog.parentNode.parentNode.querySelector(".name").textContent)
            dogForm.name.value = dog.parentNode.parentNode.querySelector(".name").textContent
            dogForm.breed.value = dog.parentNode.parentNode.querySelector(".breed").textContent
            dogForm.sex.value = dog.parentNode.parentNode.querySelector(".sex").textContent
        }
    })

    document.addEventListener("submit", function(e){
        e.preventDefault()
        
    })

})