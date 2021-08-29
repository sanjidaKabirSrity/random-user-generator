const randomAPI = async () => {
    const res = await fetch("https://randomuser.me/api/?results=50");
    const data = await res.json();
    generateRandom(data.results)
}
randomAPI()
const generateRandom = users =>{
    const generateId = document.getElementById("generate-id");
    users.forEach(user => {
        generateId.innerHTML=`
            <div class="image">
                <img src="${user.picture.large}" alt="user">
            </div>
            <p id="title">My Name</p>
            <h3 id="info">${user.name.title} ${user.name.first} ${user.name.last}</h3>
        `;

        document.getElementById("name-id").addEventListener("mouseover", ()=>{
            document.getElementById("title").innerText="My Name is"
            document.getElementById("info").innerText=`${user.name.title} ${user.name.first} ${user.name.last}`;
        })
        document.getElementById("email-id").addEventListener("mouseover", ()=>{
            document.getElementById("title").innerText="My Email is"
            document.getElementById("info").innerText=`${user.email}`;
        })
        document.getElementById("date-id").addEventListener("mouseover", ()=>{
            document.getElementById("title").innerText="My birthday is"
            document.getElementById("info").innerText=`${user.dob.date}`;
        })
        document.getElementById("map-id").addEventListener("mouseover", ()=>{
            document.getElementById("title").innerText="My address is"
            document.getElementById("info").innerText=`${user.location.postcode} ${user.location.state} ${user.location.city} ${user.location.country}`;
        })
        document.getElementById("phone-id").addEventListener("mouseover", ()=>{
            document.getElementById("title").innerText="My phone number is"
            document.getElementById("info").innerText=`${user.phone}`;
        })
        document.getElementById("password-id").addEventListener("mouseover", ()=>{
            document.getElementById("title").innerText="My password is"
            document.getElementById("info").innerText=`${user.login.password}`;
        })
    });

    
}
