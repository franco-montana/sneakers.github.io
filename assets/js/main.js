document.addEventListener('DOMContentLoaded', function() {
    // Elementos
    const menuIcon = document.getElementById('menu-icon');
    const gridList = document.querySelector('.grid-list');
    
    // Crear y añadir el overlay
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    // Toggle del menú
    function toggleMenu() {
        gridList.classList.toggle('active');
        overlay.classList.toggle('active');
        
        document.body.style.overflow = gridList.classList.contains('active') ? 'hidden' : '';
    }

    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });


    gridList.querySelectorAll('.grid-link').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    
    overlay.addEventListener('click', toggleMenu);

  
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && gridList.classList.contains('active')) {
            toggleMenu();
        }
    });
});








// EJECUTAR JSON DATA

document.addEventListener("DOMContentLoaded", function () {
    // Ruta del archivo JSON
    const rutaJson = "./assets/data/products.json";

    
    const contenedor = document.getElementById("productos");

    
    fetch(rutaJson)
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo JSON");
            }
            return response.json(); 
        })
        .then(productos => {
            
            productos.forEach(producto => {
                const productoHTML = `
                    <div class="wrapper">
                        <div class="container">
                            <div class="top">
                                <div class="img-container">
                                    <img src="${producto.imagen}" alt="">
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="left">
                                    <div class="details">
                                        <h1>${producto.nombre}</h1>
                                        <p>${producto.precio}</p>
                                    </div>
                                    <div class="buy">
                                        <i class="ri-shopping-cart-line"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
             
                contenedor.innerHTML += productoHTML;
            });
        })
        .catch(error => {
            console.error("Error al cargar los productos:", error);
            contenedor.innerHTML = "<p>Error al cargar los productos. Inténtalo más tarde.</p>";
        });
});








