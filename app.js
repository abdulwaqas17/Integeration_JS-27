function getData() {
    
axios.get('https://jsonplaceholder.typicode.com/posts')
.then((response) => {

    // response aik object return kr rha h, jis ki 4 hn {config,data,headers,request} status = 200, statusText : ""
    console.log(response);

    var data = response.data;

    // response.data aik array h
    console.log(data);

    // get the output 
    var output = document.getElementById('output');

    // use map for automatice data randering
    data.map((everyIndexOfArraySequencly)=>{

        output.innerHTML += `
        <tr>

                <td>${everyIndexOfArraySequencly.id}</td>
                <td>${everyIndexOfArraySequencly.title}</td>
                <td>${everyIndexOfArraySequencly.body}</td>    

        </tr>
            
        `

    })


})
.catch((error)=> {
    console.log('error hwa',error);
})

}


function clearData() {
 
    // get the output 
    var output = document.getElementById('output');

    output.innerHTML = '';

}

/* 
kia axios k sath asyn await use krty hn?




1. Integration kya hoti hai?
Integration ka matlab hai ek app ko doosri service (jaise kisi API) ke saath connect karna, taa ke tum data le sako ya bhej sako.

Example: Tumhari app ek user ka naam aur email kisi server par bhejti hai. Yeh kaam karne ke liye tum API use karte ho. Us API ko connect karna integration kehlata hai.
2. Axios kya hai, aur kyun use hota hai?
Axios ek JavaScript library hai jo API ke saath HTTP requests bhejne aur data lene ke liye use hoti hai. Yeh fetch() se zyada aasaan aur advanced hoti hai.

Kyun use karte hain?
Simple aur clean syntax (samajhne aur likhne mein asaan).
Automatic error handling.
Data ko bhejne aur lene ka process smooth hota hai.
Headers ya authentication add karna easy hai.
3. Axios ko kaise use karte hain?
Step 1: Install karo (agar React ya Node.js mein use kar rahe ho)
bash
Copy
Edit
npm install axios
Agar simple HTML/JavaScript file mein use kar rahe ho, to CDN link add kar lo:

html
Copy
Edit
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
Step 2: Axios se GET Request (Data lena)
Yeh request kisi API se data lene ke liye hoti hai.

javascript
Copy
Edit
axios.get("https://api.example.com/users")
  .then(response => {
    console.log(response.data); // API se aaya data
  })
  .catch(error => {
    console.error("Error hua:", error); // Agar koi masla ho
  });
Example: Tum kisi weather API se data lena chahte ho aur dikhana chahte ho.

Step 3: Axios se POST Request (Data bhejna)
Yeh request API ko data bhejne ke liye hoti hai.

javascript
Copy
Edit
axios.post("https://api.example.com/users", {
    name: "Ali",
    email: "ali@example.com"
  })
  .then(response => {
    console.log("Data bhej diya:", response.data);
  })
  .catch(error => {
    console.error("Error hua:", error);
  });
Example: Tum user ka naam aur email database mein save karte ho.

4. Good Practices (Behtareen Tareeqe)
Error Handling Zaroor Karo: Hamesha .catch() ya try...catch ka use karo, taa ke agar API kaam na kare, tumhari app crash na ho.

Async/Await Use Karo: Yeh code ko aur clean banata hai:

javascript
Copy
Edit
const fetchData = async () => {
  try {
    const response = await axios.get("https://api.example.com/users");
    console.log(response.data);
  } catch (error) {
    console.error("Error hua:", error);
  }
};
fetchData();
Base URL Set Karo: Agar ek API ke multiple endpoints use karte ho, to base URL set kar lo:

javascript
Copy
Edit
const api = axios.create({
  baseURL: "https://api.example.com",
});

api.get("/users").then(response => console.log(response.data));
Timeout Set Karo: Agar API ka response slow ho, to timeout set kar lo:

javascript
Copy
Edit
axios.get("https://api.example.com/users", { timeout: 5000 })
  .then(response => console.log(response.data))
  .catch(error => console.error("Timeout error:", error));
Conclusion:
Axios integration ke liye ek behtareen tool hai.
GET request se data lete hain aur POST request se bhejte hain.
Error handling aur async/await ko hamesha use karo.




1. JavaScript mein API kya hoti hai?
API ka matlab hai Application Programming Interface. Yeh ek zariya hai jo 2 software ya applications ko aapas mein baat karne deta hai.

Example: Tumhari app weather ki info dikhana chahti hai. Tum direct data collect nahi karte, balki kisi weather service ka API use karte ho, jo tumhein ready-made data deta hai.
2. Integration kya hoti hai?
Integration ka matlab hai API ko apni app ke andar connect karna aur use karna. Yeh process hota hai jis se tumhari app doosri service ya system ke saath kaam kar sakti hai.

Example: Agar tum Stripe (payment service) ki API ko apni website par laga dete ho, to yeh integration kehlayegi. Ab tumhari app Stripe ka payment system use kar sakti hai.
3. API aur Integration ka farq:
API	Integration
API ek tool ya interface hai.	Integration API ko use karne ka process hai.
API tumhein functions aur data ka access deti hai.	Integration ka matlab hai us API ko implement karna.
Example: Weather API data provide karti hai.	Example: Tumhari app mein weather data dikhana.
4. Kis tarah use kartay hain?
API Documentation Dekho: Har API ke saath ek manual hota hai (documentation), jo batata hai ki kaise connect karna hai aur data lena hai.

Request Send Karo: JavaScript mein fetch() function ya libraries (e.g., Axios) ka use karke API ko request bhejte hain.

javascript
Copy
Edit
fetch("https://api.example.com/data")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
Data ko Use Karo: Jo response API se milta hai, us data ko tum apni app mein dikhate ho.

Integrate Karo: Yeh ensure karte ho ke API ke through data tumhari app mein smoothly kaam kare (e.g., front-end par dikhana, back-end par process karna).



*/