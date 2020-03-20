function openBook(evt, book) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("speech-bubble");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementById(book);
  tablinks.style.display = 'block';

}

function changeTabLink(e) {
  const links = Array.from(document.getElementsByClassName('links'))
  links.forEach(link=>{
    if(link === e.target){
      link.classList.add('isactive')
    }else{
      link.classList.remove('isactive')
    }
  })
}

function openTab(event, id) {

  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("books");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.add('hidden')
  }

  document.getElementById(id).classList.remove("hidden")

}


window.addEventListener('load', () => {
  document.getElementById('default').click()
  const links = Array.from(document.getElementsByClassName('links'))
  links.forEach(link=>{
    link.addEventListener('click',changeTabLink)
  })
})



