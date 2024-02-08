// ===========================================
// navbar
// ===========================================
var profileCard = document.querySelector('.profile-card');
var navBar = document.querySelector('.card-nav');
var navItems = navBar.querySelectorAll('li');
var cardContents = [
    document.querySelector('#card-about'), 
    document.querySelector('#card-skills'), 
    document.querySelector('#card-details')
];

navItems.forEach(item => {
    var dataSet = item.dataset.page;
    item.addEventListener("click", function() {
        for (var i = 0; i < cardContents.length; i++) {
            if (i == dataSet) {
                cardContents[i].style.display = 'block';
            }else {
                cardContents[i].style.display = 'none';
            }
            navItems[i].classList.remove('active');
        }
        item.classList.add('active');
        if (profileCard.classList.contains('card-scale')) {
            profileCard.classList.remove('card-scale');
            setTimeout(() => {
                profileCard.classList.add('card-scale');
            }, 100);
        }else {
            profileCard.classList.add('card-scale');
        }
    });
});

// ===========================================
// progress bar
// ===========================================
var progressList = document.querySelector('.progress-list');
var progressItems = progressList.querySelectorAll('li');

progressItems.forEach(item => {
    var progressBar = item.querySelector('.progress-bar');
    var progressValue = progressBar.querySelector('.progress-value');
    var dataSet = progressValue.dataset.value;

    progressValue.style.width = dataSet + "%";

    var toolTip = progressValue.querySelector('.tool-tip');
    toolTip.innerHTML = dataSet + "%";

    progressValue.addEventListener("mouseover", function() {
        toolTip.style.display = 'block';
    });

    progressValue.addEventListener("mouseout", function() {
        toolTip.style.display = 'none';
    })
});
