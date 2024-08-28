
// pole 'phone'
document.getElementById('phone').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

// pole 'postal-code'
document.getElementById('postal-code').addEventListener('input', function (e) {
    let value = this.value.replace(/[^0-9]/g, ''); // Usuwa wszystkie znaki inne niż cyfry
    if (value.length > 2) {
        value = value.slice(0, 2) + '-' + value.slice(2); // Wstawia myślnik po drugiej cyfrze
    }
    this.value = value;
    
    // Walidacja
    const pattern = /^[0-9]{2}-[0-9]{3}$/;
    const errorMessage = document.getElementById('postal-code-error');
    if (!pattern.test(value) && value.length > 0) {
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
    }
});
