
//Tarayıcının depolamana alanına ekleme


function Storage()
{
    
}


Storage.prototype.addCarToStorage = function(newCar)
{
    
    let cars = this.getCarsFromStorage(); // Arrayi alıyoruz

    cars.push(newCar); //Arraye yeni aracı ekliyoruz

    localStorage.setItem("cars",JSON.stringify(cars)); //Arrayi stringe çevirip local storage'a ekliyoruz

    // console.log(newCar);

}


Storage.prototype.getCarsFromStorage = function()

{
    let cars;

    if(localStorage.getItem("cars") === null)

    {

        cars = [];

    }

    else

    {

        cars = JSON.parse(localStorage.getItem("cars"));
        // JSON.parse ile string olan veriyi arraye çeviriyoruz

    }

    return cars;

}


Storage.prototype.deleteCarFromStorage = function(title)

{
    let cars = this.getCarsFromStorage();

    cars.forEach(function(car,index)

    {
  
       cars.splice(index,1);
    

    localStorage.setItem("cars",JSON.stringify(cars));

});

}

Storage.prototype.clearAllCarsFromStorage = function()

{
    localStorage.removeItem("cars");
}

//Path: project.js

//Event Listeners




