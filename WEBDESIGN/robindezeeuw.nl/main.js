const cards = Array.from(document.querySelectorAll('.card'));
const mainContainer = document.querySelector('main')
const contactBtn = document.querySelector('#contact');
const signupBtn = document.querySelector('#signup-btn');

const contents = Array.from(mainContainer.querySelectorAll('.overlay'))

cards.forEach(card => {
    card.addEventListener('click', e => {
        //finding specific tab with target
        const target = card.dataset.target
        const content = mainContainer.querySelector('#' + target)
        
        //remove 'is-selected from all and add to target tab
        contents.forEach(c => c.classList.remove('modal-is-open'))
        document.body.classList.remove(target+'-is-open')
        document.body.classList.add(target+'-is-open') 
    })
})



// contactBtn.addEventListener('click', event => {
//     console.log('clicked!');
//     document.body.classList.add('contact-is-open');
// })

// signupBtn.addEventListener('click', event => {
//     console.log('clicked!');
//     document.body.classList.add('contact-is-open');
// })

// exit modal when clicking on X
const closeBtns = Array.from(document.querySelectorAll('.close-btn'));
closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', event => {
        document.body.classList.remove('concerts-is-open');
        document.body.classList.remove('consort-is-open');
        document.body.classList.remove('ensembles-is-open');
        document.body.classList.remove('lessons-is-open');
        document.body.classList.remove('about-is-open');
        document.body.classList.remove('contact-is-open');
    })
})

// exit modal when clicking outside of it
const modalOverlays = Array.from(document.querySelectorAll('.overlay'))

modalOverlays.forEach(overlay => {
overlay.addEventListener('click', event => {
    if (!event.target.closest('.content-box')) {   
        document.body.classList.remove('concerts-is-open')
        document.body.classList.remove('consort-is-open')
        document.body.classList.remove('ensembles-is-open')
        document.body.classList.remove('lessons-is-open')
        document.body.classList.remove('about-is-open')
        document.body.classList.remove('contact-is-open')
    }
})
})
