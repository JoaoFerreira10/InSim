

$(document).ready(function(){
    var session ;
    var product;
    var a;
    var attributeData;

  //model session  
 Session = Backbone.Model.extend({
        defaults: {
            sessionID:"",
            agency:"",
            localeInfo:"",
            links:"",
            actionRights:["A","B" ],
            messages:[ "B","C"  ],
            user:""
        },
        initialize: function(){
            alert("Session model generated");
        }
    });

ContainerDefinition = Backbone.Model.extend({
    defaults: {
        businessObjectDefinitions: [
            {
                   name: "",
                   attributeDefinitions: [  "a",   "b"  ],
                   linkDefinitions: [  "a", "b"  ],
                   layoutHintDefinitions: [ "a", "b" ]
            },
        ],
        attributeData: [ 
            {
                valueDataObj: {
                    agencyId: "",
                    productName: "",
                    productId: ""
                },
            },
        ]
    },
    initialize: function() {

    } 
});



//model product
  Product = Backbone.Model.extend({
        defaults: {
            session: {},
            //containerDefinition: {},
            validatorResponse: {}
        },
        initialize: function(){
            this.set("containerDefinition", new ContainerDefinition());
            alert("Product model generated");
            // this.set({ 'attributeData' : new AttributeData(this.get("containerDefinition.attributeData")) });
        },
    });

/*
///attribute data model
AttributeData = Backbone.Model.extend({
    defaults:{
         attributeData: [
            {
                valueDataObj: {
                    agencyId: "",
                    productName: "",
                    productId: ""
                },
            },
        ],
    },

        initialize: function(){
            alert("AttributeData model generated");
             
        },
                get: function (attr) {
  if (-1 === attr.indexOf('.')) { 
    return this.attributes[attr];
  }

  return _.inject(attr.split('.'), function (o, k) {
    return o && o[k];
  }, this.attributes);
}
});

*/

///////////////////////////////////////////////////////////////////////////////////////////////////////
BusinessObjectDefinitions = Backbone.Model.extend({
    initialize:function(){
           alert("businessObjectDefinitions");
    }
});


///////////////////////////////////////////////////////////////////////////////////////////////////////

Illustration =Backbone.Model.extend({

initialize: function(){
              alert("Illustration model generated");
              this.set("containerDefinition", new ContainerDefinition());
        }

});
//////////////////////////////////////////////////////////////////////////////////////////////////////



/*

    
getSession(
    function(d){

    session = new Session(d);
    console.log("created model Session with session id:");
    console.log(session.get("sessionID"));
    alert(session.get("sessionID"));
     console.log(JSON.stringify(session));
   });
*/

     getProducts("asasdasd",
        function(p){
             product = new Product(p);
            attributeData = product.get("containerDefinition").get('attributeData');
            attributeData[0].valueDataObj.productName = 'XPTO';
            product.get("containerDefinition").set({'attributeData': attributeData});
           // console.log(p);
                      });

       
       

    });

getIlustration("4715", function(i) {
      //  xpto = new Product(i);
      //  console.log(i);
      //  var o = xpto.get("containerDefinition");
      // console.log(o);
}); 

// Quando se carregar no botao
getCalculate({sessionId: }, function (data) {
    var price = data;
    alert(price);
});