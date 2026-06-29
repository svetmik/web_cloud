


const  api_version = "v1.0.2";

async function foo () {   

    const fetch_js =  document.querySelector("#fetch_id");

    let resp = await fetch("https://api.github.com/repos/svetmik/AppWidget/releases/latest");


    if(resp.ok) {

        console.log("ok")

        const app_version = await resp.json();
        
        const get_app_version = app_version.tag_name;
        
        console.log(get_app_version);


    } else {
        console.log(a.status);
    }

}


foo();
