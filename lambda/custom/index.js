'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const app = require('jovo-framework').Jovo;

exports.handler = function(event, context, callback) {

    app.enableRequestLogging();
    app.enableResponseLogging();

    let intentMap = {
        'AMAZON.HelpIntent' : 'HelpIntent',
        'AMAZON.StopIntent' : 'StopIntent',
        'AMAZON.CancelIntent' : 'StopIntent',
        'given-name' : 'name'
    };
    app.setIntentMap(intentMap);

    app.handleRequest(event, callback, handlers);
    app.execute();
};


// =================================================================================
// App Logic
// =================================================================================

const handlers = {

    'LAUNCH': function() {
        app.ask('Welcome to Hello World. You can say "Hello World" or "My name is Fred". What would you like to do?', 'For a complete list of options, say "help"');
    },

    'END' : function() {
        let reason = app.getEndReason();
        console.log('Session ended with reason: ' + reason);

        app.tell('goodbye!');        
    },    

    'StopIntent' : function() {
        app.toIntent('END');
    },

    'HelpIntent' : function() {
        var assistantName;
        if(app.isAlexaSkill()) {
            assistantName = "alexa,";
        } else if(app.isGoogleAction()) 
        {
            assistantName = "ok google,";
        }
        app.ask('You can try: ' + assistantName + ' "hello world" or '+ assistantName + ' "my name is John". Which do you want to do?', 'For a complete list of options, say "help"');
    },
    
    'HelloWorldIntent': function() {
        app.ask('Hello big beautiful world! What do you want to do next?', 'For a complete list of options, say "help"');
    },

    'MyNameIsIntent': function() {
        let name = app.getInput('name');
        app.ask('Hello there, ' + name + '. What do you want to do now?', 'For a complete list of options, say "help"');
    },
    
    'Unhandled' : function() {
        app.ask("Sorry, I didn't get that. Can you please repeat?", 'For a complete list of options, say "help"');
    }
};