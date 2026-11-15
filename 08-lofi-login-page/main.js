
const toggleDayNight = () => {
  const fixedBox = document.querySelector('.fixed-box')
  // console.log(fixedBox)
  const currentFixedBoxStyles = window.getComputedStyle(fixedBox, false)
  const formLabels = document.querySelectorAll('.form-control-label')

  if (currentFixedBoxStyles.backgroundImage?.includes('bg-1.gif')) {
    fixedBox.style.backgroundImage = 'url("./assets/bg-2.gif")'
    formLabels.forEach(label => { label.style.color = '#2c3e50' })
  } else {
    fixedBox.style.backgroundImage = 'url("./assets/bg-1.gif")'
    formLabels.forEach(label => { label.style.color = 'white'})
  }


}