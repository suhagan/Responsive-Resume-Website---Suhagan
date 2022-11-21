function myEducation() 
{
    var checkBox = document.getElementById("myCheck1");
    var div = document.getElementById("education");
    if (checkBox.checked == true){
      div.style.display = "block";
    } else {
       div.style.display = "none";
    }
}

const url ="education.json";

const education = document.getElementById("education");
education.innerHTML = `<p>loading...</p>`;

async function getData()
{
    let response  = await fetch(url);
    if(response.ok){
        education.innerHTML = ``;
        let json = await  response.json();
        for(let i=0; i<json.length; i++){
            education.innerHTML += `<p>${json[i].period}<p>
                        <h4>${json[i].field},</h4><h5>${json[i].degree}</h5>
                        <p><i>${json[i].institution}<br>
                        ${json[i].thesis}</i></p><br>`;
        }
    }else{
        console.log("HTTP Error: "+response.status);
    }
}

getData();