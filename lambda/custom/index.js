'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const app = require('jovo-framework').Jovo;

exports.handler = function(event, context, callback) {
    app.handleRequest(event, callback, handlers);
    app.execute();
};


// =================================================================================
// App Logic
// =================================================================================

const handlers = {

    'LAUNCH': function() {
        app.toIntent('HelloWorldIntent');
    },

    'END' : function() {
        let reason = app.getEndReason();
        console.log('Session ended with reason: ' + reason);

        app.tell('Bye!');        
    },    

    'AMAZON.StopIntent' : function() {
        app.toIntent('END');
    },

    'AMAZON.CancelIntent' : function() {
        app.toIntent('END');
    },

    'AMAZON.HelpIntent' : function() {
        app.tell('You can try: "alexa, hello world" or "alexa, ask hello world my name is John"');
    },
    
    'HelloWorldIntent': function() {
        app.tell('Hello World!');
    },

    'MyNameIsIntent': function() {
        let name = app.getInput('name');
        app.tell('Hello there, ' + name);
    },
    
    'Unhandled' : function() {
        app.tell("Sorry, I didn't get that. Can you please repeat?");
    }
};
