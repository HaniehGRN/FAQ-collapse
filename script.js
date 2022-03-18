const btns = document.querySelectorAll(".faq-toggle");

btns.forEach( btn => {
    btn.addEventListener("click", () => {
        const prnt = btn.parentElement;
        prnt.classList.toggle("active");
        /*if (prnt.classList.contains("active")) { what i did :)
            prnt.classList.remove("active");
        }
        else {
            prnt.classList.add("active");
        }*/
    })
})
