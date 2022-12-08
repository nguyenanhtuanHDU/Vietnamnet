const nav = document.querySelector('#nav')
const goUp = document.querySelector('.go-up')
const lineTab = document.querySelector('.line-tab')
const tabItem = document.querySelectorAll('.tab-item')
const contentItem = document.querySelectorAll(
  '.read-comment .inner .content .item'
)
const contentHeading = document.querySelectorAll(
  '.read-comment .inner .tabs .tab-item h2.active'
)

const toggleViewPW = document.querySelector(
  '.form .form-wrapper .form-inner .main .email-pw .message .fa-eye'
)
const loginBtn = document.querySelectorAll('.login-btn')
const form = document.querySelector('.form')
const formPW = document.querySelector(
  '.form .form-wrapper .form-inner .main .email-pw .pw'
)
const formClose = document.querySelector('.form-close ')

// handle toggle form
const toggelForm = (type) => {
  if (type === 'show') {
    form.classList.add('active')
  } else if (type === 'hide') {
    form.classList.remove('active')
  }
}
loginBtn.forEach((item) => {
  item.addEventListener('click', function (e) {
    toggelForm('show')
  })
})
formClose.addEventListener('click', function () {
  toggelForm('hide')
})
form.addEventListener('click', function (e) {
  if (e.target == form) {
    toggelForm('hide')
  }
})

// toggle show hide password on form
toggleViewPW.addEventListener('click', function (e) {
  formPW.type = formPW.type === 'password' ? 'text' : 'password'
})

// handle fixed menu
const spaceToTop = nav.offsetTop
window.addEventListener('scroll', function () {
  if (window.pageYOffset >= spaceToTop) {
    nav.classList.add('sticky')
    goUp.style.display = 'block'
  } else {
    nav.classList.remove('sticky')
    goUp.style.display = 'none'
  }
})

// handle up to top
goUp.addEventListener('click', function () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

// set position of line tab default
lineTab.style.width = `${tabItem[0].clientWidth}px`

// set position of line tab when click tabItem
tabItem.forEach((tab) => {
  tab.addEventListener('click', function (e) {
    const tabName = e.target.dataset.tab
    tabItem.forEach((item) => {
      item.classList.remove('active')
    })
    e.target.classList.add('active')
    lineTab.style.left = `${e.target.offsetLeft}px`
    lineTab.style.width = `${e.target.offsetWidth}px`
    contentItem.forEach((item) => {
      if (item.dataset.tab === tabName) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  })
})

// scroll x nav
const navList = document.querySelector('#nav .nav-wrapper ul')
const navWrapper = document.querySelector('#nav .nav-wrapper')
const navRightBtn = document.querySelector('#nav .nav-wrapper .right-btn')
let space = 0
let add = 50
navRightBtn.addEventListener('click', function () {
  space += add
  console.log(space)
  if (space > navList.scrollWidth - navList.offsetWidth) {
    add = -50
    this.classList.remove('fa-circle-chevron-right')
    this.classList.add('fa-circle-chevron-left')
  } else if (space <= 0) {
    add = 50
    this.classList.add('fa-circle-chevron-right')
    this.classList.remove('fa-circle-chevron-left')
  }
  navList.scroll(space, 0)
})
// navList.addEventListener('wheel', function (e) {
//   this.scrollLeft += e.deltaY
//   if (this.scrollLeft === this.scrollWidth - this.offsetWidth) {
//     this.classList.remove('fa-circle-chevron-right')
//     this.classList.add('fa-circle-chevron-left')
//   } else {
//     this.classList.add('fa-circle-chevron-right')
//     this.classList.remove('fa-circle-chevron-left')
//   }
//   if (this.scrollLeft <= 50) {
//     this.classList.add('fa-circle-chevron-right')
//     this.classList.remove('fa-circle-chevron-left')
//   } else {
//     this.classList.remove('fa-circle-chevron-right')
//     this.classList.add('fa-circle-chevron-left')
//   }
// })