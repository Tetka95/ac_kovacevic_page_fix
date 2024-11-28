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