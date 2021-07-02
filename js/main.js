function showHome(){
    document.getElementById('main').style.display = 'block';
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    var x = document.getElementsByClassName('icons main');
    for (i=0; i<x.length;i++){
        x[i].style.display="flex";
    }
}
function showAbout(){
    document.getElementById('main').style.display = 'none';
    document.getElementById('about').style.display = 'block';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
    var x = document.getElementsByClassName('icons main');
    for (i=0; i<x.length;i++){
        x[i].style.display="none";
    }

}
function showContact(){
    document.getElementById('main').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('contact').style.display = 'block';
    var x = document.getElementsByClassName('icons main');
    for (i=0; i<x.length;i++){
        x[i].style.display="none";
    }
}
function showProjects(){
    document.getElementById('main').style.display = 'none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    document.getElementById('contact').style.display = 'none';
    var x = document.getElementsByClassName('icons main');
    for (i=0; i<x.length;i++){
        x[i].style.display="none";
    }
}