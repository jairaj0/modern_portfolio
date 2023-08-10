const navbar = document.getElementById("navbar");

window.addEventListener("scroll" , () => {
    const scrollPosition = window.scrollY;
    const threshold = 0;
    if(scrollPosition > threshold){
        navbar.style.backgroundColor = "#114250";
    } else{
        navbar.style.backgroundColor = "transparent";
    }
})

const countAnimation = () => {
    const experienceElement = document.getElementById("experience");
    const clientsElement = document.getElementById("clients");
    const projectsElement = document.getElementById("projects");
    const screensElement = document.getElementById("screens");

    const obj = {
        ex : [0 , 3],
        cl : [0 , 20],
        pr : [0 , 50],
        sc : [0 , 200],
    }

    setInterval(() => {
        obj.ex[0] = obj.ex[0] < obj.ex[1] ? obj.ex[0] + 1 : obj.ex[1];
        obj.cl[0] = obj.cl[0] < obj.cl[1] ? obj.cl[0] + 1 : obj.cl[1];
        obj.pr[0] = obj.pr[0] < obj.pr[1] ? obj.pr[0] + 1 : obj.pr[1];
        obj.sc[0] = obj.sc[0] < obj.sc[1] ? obj.sc[0] + 1 : obj.sc[1];

        experienceElement.textContent = `${obj.ex[0]} +`;
        clientsElement.textContent = `${obj.cl[0]} +`;
        projectsElement.textContent = `${obj.pr[0]} +`;
        screensElement.textContent = `${obj.sc[0]} +`;
    }, 10);
}

window.addEventListener('load' , countAnimation)


