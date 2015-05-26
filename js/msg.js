function Calculate(){
  var nome =document.getElementById('nome').value;
  var sobrenome =document.getElementById('sobrenome').value;
  var aniversario=document.getElementById('aniversario').value;
  var pagamento=document.getElementById('pagamento').value;
  var duracao=document.getElementById('duracao').value;
  var capital=document.getElementById('capital').value;

  alert(sobrenome);
      // var data= JSON.stringify({});
}


//get session id 
function getSession(callback){
    console.log("entered get session");
    $.ajax({
        //url: "/user/parker/login?",
        url : "http://www.mocky.io/v2/55478f92f1598aaa187763d5",
        type: "POST",
        data: { password: "parker" },
        dataType: "json",
        success: function (result) {
            console.log("sucess getting session : ");
            console.log(result.sessionID);
            callback(result);
          //  getProducts(result.sessionID);
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        console.log("failed : ");
        alert("failed getting session");
        }
    });
};


function getProducts(session,callback){
    console.log("entered get product");
    $.ajax({
        //url: "/user/parker/productsAndTemplates?",
        url: "http://www.mocky.io/v2/555daac09a6cd3cc05cb6300",
        type: "POST",
        data: { sessionid: session },
        dataType: "json",
        success: function (result) {
            console.log("sucess");
            callback(result);
           // getIlustration(result.containerDefinition.businessObjectDefinitions.name);
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        alert("failed getting product");

        }
    });
};



function getIlustration(product,callback){
        $.ajax({
            ///illustration/definition?
        url: "http://www.mocky.io/v2/555df4939a6cd3510dcb6328",
        type: "GET",
        data: {  
       // productid: product,
        agencyId : product,    
       // sessionid: session       
         },
        dataType: "json",
        success: function (result) {
            console.log("getting illustration for product");
            console.log("sucess");
            callback(result);
 
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        }
    });
};

function getSimulation(data){
    $.ajax({
        url: "/contract/74/calculate?",
        type: "POST",
        data: { "session": {},
                "containerDefinition": {
                    "businessObjectDefinitions": [ ] },
                    "attributeData": [
                {   "valueDataObj": { "ContractBO": [ {
                    "paymentMode": "",
                    "quoteId": "70",
                    "PropertyBO": [],
                    "endDate": "",
                    "AdjustmentBO": [],
                    "contractStatus": "WIP",
                    "productType": "TCMP",
                    "currency": "",
                    "RoleBO": [],
                    "RateComponentBO": [],
                    "PackageBO": [],
                    "effectiveDate": "1375391084718",
                    "contractName": "Quote 1",
                    "PremiumComponentBO": [ ],
                    "paymentMethod": "" }
                ]
                }}]
                },   
        dataType: "json",
        success: function (result) {
            switch (result) {
                case true:               
                    console.log("sim");                          
                    break;
                default:
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        }
    });
};

