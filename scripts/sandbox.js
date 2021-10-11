const gallery = document.querySelector('.gallery-row');

const laptops = [
    {name: 'Hp Elite x2 1012 G1 2-in-1 Laptop', price: 'N270,000', image: 'hpElite.jpg'},
    {name: 'Dell Latitude 13 7350 (2-in-1 Convertible Laptop)', price: 'N199,000', image: 'dellLatitude.jpg'},
    {name: 'Lenovo Ideapad 320', price: 'N190,000', image: 'lenovoIdeaPad.jpg'},
    {name: 'Hp Pavilion 15', price: 'N140,000', image: 'HPPavilion.jpg'},
    {name: 'Hp Pro book 640 G5', price: 'N310,000', image: 'hpProbook.jpg'},
    {name: 'Lenovo YoGA S940 || 14 inch screensize iPS Touchscreen', price: 'N365,000', image: 'lenovoYoga.jpg'},
    {name: 'DELL XPS 15 (9560)(Touchscreen)', price: 'N415,000', image: 'dellXPS.jpg'},
    {name: 'Sleek Portable Hp Elitebook folio', price: 'N270,000', image: 'hpElitebook.jpg'},
    {name: 'Grade A Dell Latitude 7400 Intel core i-7', price: 'N220,000', image: 'dellLatitude7400.jpg'},
    {name: 'Super Dell G7 7555 Gamini Laptop', price: 'N340,000', image: 'dellG7.jpg'},
    {name: 'Dell Latitude Series', price: 'N258,000', image: 'dellLatitudeSeries.jpg'},
    {name: 'Dell Latitude 7350 (2-in-1 Convertible Laptop)', price: 'N295,000', image: 'dell7350.jpg'},
];

laptops.forEach(laptop => {
    let html = `
        <div class="item col-sm-6 col-md-4 col-lg-3 p-2 text-center bg-white pb-3">
            <div class="image p-3">
                <img src="../images/${laptop.image}" class="img-fluid">
            </div>
            <div class="details px-3">
                <p class="fs-6 fw-light text-dark my-0">${laptop.name}</p>
                <p class="fst-normal fs-6 text-danger my-0">${laptop.price}</p>
            </div>
            <div class="icon px-3">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
            <button class="btn btn-secondary btn-rounded p-2 my-2">Add to Cart</button>
        </div>
    `;

    gallery.innerHTML +=html;
})








