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
        agencyId : product
       // sessionid: session       
         },
        dataType: "json",
        success: function (result) {
            console.log("sucess");
            callback(result);
 
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        }
    });
};

function getSimulation(calculate,callback){
    // var obj = jQuery.parseJSON(x);
    console.log(calculate);

   var x = JSON.stringify(calculate);




     $.ajax({

        url: "calculate.json",
        type: "POST",
        data: x,
        dataType: "json",
        success: function (result) {

            var x= JSON.stringify(result.attributeData[0].valueDataObj.ContractBO[0].PremiumComponentBO[0].PremiumDetailBO[0].amount);
            callback(result);
            x =parseFloat(x).toFixed(2);
            showValue(x);
        },
        complete: function (result) {

            callback(result);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log("error");
            alert(xhr.status);
            alert(thrownError);
        }
    });
};

function showValue(value){

    $('#resultado span').css({"border": "5px solid white"});
    $('#resultado span').text(value +" €");


};

