const accordion = document.getElementsByClassName('content-container');

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        // Close all FAQs
        for (let j = 0; j < accordion.length; j++) {
            if (i !== j) {
                accordion[j].classList.remove('active');
            }
        }

        // Toggle the clicked FAQ
        this.classList.toggle('active');

        // Toggle the icon
        const icon = this.querySelector('.icon');
        icon.src = (icon.src.includes('icon-plus.svg')) 
            ? '/assets/images/icon-minus.svg' 
            : '/assets/images/icon-plus.svg';
    });
}
