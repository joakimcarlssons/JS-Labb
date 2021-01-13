const btn = document.querySelector(".btn")

const colorArr = ["white", "black", "grey", "blue", "green", "yellow", "purple", "salmon", "teal", "red", ]

// for (let btn of btns) {
//     btn.addEventListener("click", () => {

//         const body = document.querySelector("body")

//         body.className = ''
//         body.classList.add(btn.getAttribute("value"))
//     })
// }

    btn.addEventListener("change", () => {
        const body = document.querySelector("body")

        body.className = ''
        body.classList.add(btn.value)
    })

    btn.addEventListener("input", () => {
        let ul = document.querySelector("ul")
        let li = document.createElement("li")
        let b = document.createElement("button")

        let items = document.querySelectorAll("ul > li")
        let result = colorArr.filter(e => e.includes(btn.value))

        if(result.length > 0) {
            for(let r of result) {
                for (let i of items) {
                    i.remove();
                }
                
                if (btn.value != ""){
                    let li = document.createElement("li")
                    let b = document.createElement("button")
                    b.innerText = r

                    b.addEventListener("click", () => {
                        const body = document.querySelector("body")

                        body.className = ''
                        body.classList.add(r)
                    })

                    ul.append(li)
                    li.append(b)
                }
            }
        }

        else if (result.length == 0) {
            for (let i of items) {
                i.remove();
            }
            
            let li = document.createElement("li")
            let p = document.createElement("p")

            p.innerText = "Invalid Color!"

            ul.append(li)
            li.append(p)
        }
        

    })