CalculateData = Backbone.Model.extend({

  defaults:{
    "session": {
        "sessionID": "MTQyNzE4OTE5MjIxNDo4MGM3ZDBiZTMzZjIyYWYzZTRiMTcwMGVlN2ViNDcxMmYwNTEzMmNlZTRiYzBiNTg3OWQxMmNlYjk5MmE1MmY2ODRmNzk1NzkzMTA5YjA0MDY1OTU5YWNmZDg4YjY5MGEwOGQ5MGE0ODU3YzRmYzAzZjk4MGJiNzY5MGVkYTQ4YjVkMmUwMTdjNzlmYTdhYzA2MGU2YmUzNzRlMmQwYmRhNjA3NTc4NTA1YjRiNGZhNDQ2ODllYzVkZjRiOTBiNjE3NzI3YjE5MDcyYTBjYjBhYzM1MGI2MTM0NzA1ZWVmNWFhOTJlNDJmZjcwMDNhZGUzZjg1NjVmYTY2N2ExYWI2ZWM5NDEzZjk5MmIwYTQyNGJiZWZkZjg2YzdhYzViMTM2ZTU5YThiYzE2NTMwZTk4MWMxZTRiMTM4Njc2OTA0YTQzYzBhM2M2OTM3NTE3Mzg0MzFjYTMzNGZkNmU0NWE5YzQxY2E1NjBiOTU0MzhiYTdlNDRkYWM4N2JiNDcwMzcxOGY4ZDk3ZjE2OGM0M2U1Y2Q3ODA4MGQ0NzFiZTUwODI5ZjQ3M2YwNzdhYjFhOWQwMTMyNjU3YWY5ODE4ZTc5ZjVkYzhiNmNlYTRkZGEzMzM3MzE2MjI5ZTdjNDc1ZmI2ODY4NWJkMGIzODM4N2U5MjM2NGIxYjI0NDVlY2JkMzpyZXMtYXBpLTE0MjcxODkxOTIyMTQ6OTk0MTkwYTAxYTQzY2RhZTZkM2JhMzZmZjFhNzBmODNiNmJjMTA3MjFkNTlmYjY5YzE2ZGRlMGIyMTczZjk3OWNmYjdhM2Q0OTJjYWFiZDZjMDY0ZGQwMTMwZTQwZGEzMmQwY2YwNWNlNjkyMjA1N2M3MTk4MWQwNGY0ZGJhMmU="
     },
     "attributeData":[
     ]
    },
    initialize: function(){

 
          valueDataObjModel= new ValueDataObj();

        this.get("attributeData")[0]=valueDataObjModel;

    }


});






ValueDataObj=Backbone.Model.extend({
    defaults: {
        "valueDataObj": {
            "illustrationID": "InvestmentPlan1",
            "illustrationName": "InvestmentPlan",
            "illustrationStatus": "Active",
            "producerNumber": "business",
            "ContractBO": [
                    {
                    "PackageBO": [
                        {
                            "RoleBO": [
                                {
                                    "PartyBO": [
                                    ],
                                    "participantType": "LifeParticipant",
                                    "order": "1"
                                }
                            ],
                            "packageType": "InvestmentPlanPackage",
                            "isSelected": true,
                            "packageId": "1",
                            "PremiumComponentBO": [
                                {
                                    "PremiumDetailBO": {
                                        "amount": ""
                                    }
                                }
                            ]
                        }
                    ],
                    "contractStatus": "WIP",
                    "productType": "InvestmentPlan",
                    "contractName": "",
                    "effectiveDate": 1427155200000,
                    "PropertyBO":[
                    ],
                    "quoteId": "1",
                    "currency": "USD",
                    "PremiumComponentBO": [
                        {
                            "PremiumDetailBO": [
                                {
                                    "amount": ""
                                },
                                {
                                    "amount": ""
                                },
                                {
                                    "amount": ""
                                },
                                {
                                    "amount": ""
                                }
                            ]
                        }
                    ]
                }
            ]

        }
    },
    initialize: function(){
       

       propertyModel=new PropertyBO();
       individualModel= new IndividualBO();

       this.get("valueDataObj").ContractBO[0].PropertyBO=propertyModel;
       this.get("valueDataObj").ContractBO[0].PackageBO[0].RoleBO[0].PartyBO[0]=individualModel;

    }
});




PropertyBO = Backbone.Model.extend({

    defaults: {
        "PropertyBO": [
            null,
            null,
            null,
            {
                "PeriodicPremiumIncrement": 0
            },
            {
                "Duration": " "
            },
            {
                "InitialPremium": 5000
            },
            {
                "ProductPaymentFrequency": ""
            },
            {
                "PeriodicPremium": 25
            },
            {
                "Indexation": 0
            }
        ]
    },


    initialize: function () {


    },

    setPeriodicPremiumIncrement: function(value) {

        var x={"PeriodicPremiumIncrement": value};
        this.get("PropertyBO")[3]=x;
    },

    setDuration: function(value){
     
        var x={"Duration": value};
        this.get("PropertyBO")[4]=x;
    },

    setInitialPremium: function(value){

        var x= {"InitialPremium": value};
         this.get("PropertyBO")[5]=x;
    },

    setProductPaymentFrequency: function(value){

        var x={"ProductPaymentFrequency": value};
        this.get("PropertyBO")[6]=x;
    },


    setPeriodicPremium: function(value){

        var x= {"PeriodicPremium": value};
        this.get("PropertyBO")[7]=x;
    },

    setIndexation: function(value){

        var x= {"Indexation": value};
         this.get("PropertyBO")[8]=x;

    }


});



IndividualBO=Backbone.Model.extend({

    defaults: {
        "IndividualBO": {
            "firstName": "",
            "lastName": "",
            "dateOfBirth": "478483200000"
        },
        "partyId": "1",
        "externPartyId": "1"
    },
    initialize: function(){       
    },

    setFirstName: function(value){
        this.get("IndividualBO").firstName=value;
    },

    setLastName: function(value){
        this.get("IndividualBO").lastName=value;
    },

    setDateOfBirth: function(value){
        this.get("IndividualBO").dateOfBirth=value;
    }

});






