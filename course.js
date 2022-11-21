function myCourses() 
{
    var checkBox = document.getElementById("myCheck");
    var div = document.getElementById("course");
    if (checkBox.checked == true){
      div.style.display = "block";
    } else {
       div.style.display = "none";
    }
}
const urlCourse ="course.json";

const course = document.getElementById("course");
course.innerHTML = `<p>loading...</p>`;

async function getData()
{
    let response  = await fetch(urlCourse);
    if(response.ok){
        course.innerHTML = ``;
        let json = await  response.json();
        for(let i=0; i<json.length; i++){
            course.innerHTML += `<p>${json[i].period}<p>
                        <h4>${json[i].name},</h4>
                        <p>${json[i].school}</p>
                        <p><i>${json[i].description}</i><br>
                        ${json[i].tools}</p><br>`;
        }
    }else{
        console.log("HTTP Error: "+response.status);
    }
}

getData();