

AttributeData = Backbone.Model.extend({
    defaults:{
        "attributeData": [

        ]
    },
    initialize: function(){
        var x = this.get("attributeData");
        var e = x[0];
        valueDataObjModel = new ValueDataObj(e);
       alert("AttributeData model generated");
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
  //  alert("ValueData model generated");

    var t = this.get("IndividualBO");
    individualModel = new IndividualBO(t);
    //alert(JSON.stringify(t));

    var property = this.get("PropertyBO");
    //var temp=property;
    propertyModel= new PropertyBO(property);

  //  alert(JSON.stringify(pmodel));
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
                "Duration": "8"
            },
            {
                "InitialPremium": 5000
            },
            {
                "ProductPaymentFrequency": "Monthly"
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
        alert("PropertyBO model generated");
    },

    setPeriodicPremiumIncrement: function(value) {
        this.set({"PeriodicPremiumIncrement": value});
    },

    setDuration: function(value){
     this.set({"Duration": value});
  },

    setInitialPremium: function(value){
        this.set({"InitialPremium": value});
    },

    setProductPaymentFrequency: function(value){
        this.set({"ProductPaymentFrequency": value});
    },


    setPeriodicPremium: function(value){
        this.set({"PeriodicPremium": value});
    },

    setIndexation: function(value){
        this.set({"Indexation": value});
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
        //alert("IndividualBO model generated");
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

})






