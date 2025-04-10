function hashThing() {
      const main = document.querySelector("main");
      if (location.hash === "#horizontal" || location.hash === "#vertical") {
            console.log(location.hash.substring(1));
            for (const className of main.classList) {
                  main.classList.remove(className)
            }
            main.classList.add(location.hash.substring(1));
      }
}

function images(amount) {
      for (let i = 0; i < amount; i++) {
            const main = document.querySelector("main");
            const newDiv = document.createElement("div");
            const newImg = document.createElement("img");
            newImg.src = "https://picsum.photos/id/" + (i+1) +"0/150";
            main.appendChild(newDiv);
            newDiv.appendChild(newImg);      
      }  
}

hashThing();
window.addEventListener('hashchange', hashThing);
images(12);

