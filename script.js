document.addEventListener('DOMContentLoaded', () => {
    const wishButton = document.getElementById('wishButton');
    const secretMessage = document.getElementById('secretMessage');
    
    const wishes = [
        "ѕусть ваша новогодн€€ Єлка будет самой €ркой!",
        "∆елаем, чтобы в новом году было больше поводов дл€ улыбки!",
        "ѕусть каждый ваш день будет наполнен волшебством!",
        "∆елаю найти под Єлкой то, о чЄм давно мечтали!"
    ];

    wishButton.addEventListener('click', () => {
        // ¬ыбираем случайное пожелание
        const randomIndex = Math.floor(Math.random() * wishes.length);
        const randomWish = wishes[randomIndex];
        
        // ќтображаем сообщение
        secretMessage.textContent = randomWish;
        secretMessage.classList.remove('hidden');
        
        // —крываем кнопку, чтобы не спамить сообщени€ми
        wishButton.style.display = 'none';
    });
});