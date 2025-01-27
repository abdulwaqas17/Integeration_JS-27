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

*/