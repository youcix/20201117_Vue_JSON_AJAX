new Vue ({
    el:"#content",
    data:{
        datas:null
    }

});

mounted(){
    var xhr = new xhr XMLHttpRequest();
    xhr.open("get","https://data.tycg.gov.tw/api/v1/rest/datastore/a7db5f95-ac1c-4597-8bf5-c5be0e57ae5f?format=json");
    xhr.send();
}