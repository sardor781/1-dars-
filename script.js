const ul = document.getElementById("ul");
const btn = document.getElementById("btn");
const apiUrl = "https://688c4d85cd9d22dda5cca3af.mockapi.io/qodir/Bro"

async function postUsers() {
    const oti = document.getElementById("name").value.trim();
    const number = document.getElementById("number").value.trim();
    
    const username = { oti, number }
    try {
        const res = await fetch(apiUrl , {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(username)
        });
        
        if (!res.ok) throw new Error("Xato");
        
        const data = res.json();
        console.log(data);
    } catch (err) {
        console.error("Xatolik", err);
        
    }
}

btn.addEventListener("click", async () => {
    await postUsers()
    await showUsers()
})


async function showUsers() {
    try {
        let res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Xatolik bor");

        const users = await res.json();
        console.log(users);
        ul.innerHTML = '';

        users.forEach(element => { 
            let li = document.createElement("li");
            li.classList.add("px-5", "flex", "items-center", "justify-center", "gap-3");
            li.innerHTML = `
                <div class="w-10 h-10 object-cover">
                    <img src="images/image.png" class="w-12 h-12" alt="">
                </div>
                <div class="border-b border-solid border-gray-400 w-[97%] pb-2 flex justify-between items-center pr-5 py-5">
                    <div class="flex flex-col gap-1">
                        <h1 class="font-medium text-lg">${element.oti}</h1>
                        <span class="font-medium text-sm text-[#8A8A8D]">${element.number}/${element.name}</span>
                    </div>
                    <div class="flex items-center gap-9">
                        <img src="images/image copy.png" class="w-6 h-6 cursor-pointer" alt="">
                        <img src="images/image copy 2.png" class="w-4 h-5 cursor-pointer" alt="">
                    </div>
                </div>
            `
            ul.append(li);
        });
    } catch (err) {
        console.error("Xatolik iltimos", err);
    }
}


