const passwordInput = document.getElementById('password')

const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let password = '';
    let length = 10;

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    passwordInput.value = password;
     
}

const copyPassword = () => {
    passwordInput.select();
    document.execCommand("copy");
    window.alert('password copied!')
}
