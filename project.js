


const form = document.getElementById('car-form');
const titleElement = document.querySelector('#title');
const priceElement = document.querySelector('#price');
const urlElement = document.querySelector('#url');
const cardBody = document.querySelectorAll('.card-body')[1];
const clear = document.getElementById("clear-cars");



//UI Objesini Başlatma

const ui = new UI();

const storage = new Storage();

eventListeners();

function eventListeners()

{
    form.addEventListener('submit',addCar);

    document.addEventListener('DOMContentLoaded',function()
    {
        let cars = Storage.getCarsFromStorage();
        ui.loadAllCars(cars);
    
        // cars.forEach(function(car)
        // {
        //     ui.addCarToUI(car);
        // });

    });

    cardBody.addEventListener('click',deleteCar);
    clear.addEventListener('click',clearAllCars);


}

function addCar(e)
{

    

    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if(title === '' || price === '' || url === '')

    {
        ui.showAlert("Lütfen tüm alanlari doldurunuz","danger");

    }

    else

    {
        const newCar = new Car(title,price,url);
        ui.addCarToUI(newCar); //Arayüze araç ekleme
        storage.addCarToStorage(newCar); //Storage'a araç ekleme
        ui.showAlert('Araba Başariyla Eklendi','success'); //Alert mesajı

    }

    ui.clearInputs(titleElement,priceElement,urlElement); //Araç temizleme işlemi!

    e.preventDefault(); // yeniledigimiz vakit kaybolmayı engeller!

}


function deleteCar(e)

{
    console.log(e.target);
    
    if(e.target.id === 'delete-car')

    {
        ui.deleteCarFromUI(e.target);
        storage.deleteCarFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.showAlert('Araba Başariyla Silindi','success');
    }
}


function clearAllCars()

{
    if(confirm('Emin misiniz?'))

    {
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
    }
}


