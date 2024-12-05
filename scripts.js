document.addEventListener('DOMContentLoaded', function() { 
    const inputIds = ["tab2", "tab3", "tab4", "tab5", "tab6"]; 
    inputIds.forEach(id => { 
        document.getElementById(id).addEventListener('focus', function() { 
            document.querySelector('.content2').style.overflow = 'hidden'; 
        });
        document.getElementById(id).addEventListener('blur', function() { 
            document.querySelector('.content2').style.overflow = 'auto';
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".container .card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.remove("open");
                }
            });
            card.classList.toggle("open");
        });
    });
});