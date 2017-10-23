# Alexa Skill/Google Action Starter Template using ASK CLI + Jovo Framework
An starter project template for creating Alexa Skills and Google Actions and makes use of the [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) and the [Jovo Framework for Node.js](https://github.com/jovotech/jovo-framework-nodejs). A single code base is hosted in Lambda and can be used by devices that support Amazon Alexa or Google Assistant.

## First-Time-Only Setup
1. Install Node.js version 6.10 or confirm the correct version is installed:

    ```bash
    $ node --version
    ```

2. Install ASK CLI:

    ```bash
    $ npm install -g ask-cli
    ```

    If you are using Linux, the installation may require `sudo`:

    ```bash
    $ sudo npm install -g ask-cli
    ```

3. Init ASK CLI to configure the `default` profile:

    ```bash
    $ ask init
    ```

    If you used a profile other than the default one, there will be additional changes needed to use this template.




## Quick Setup

1. Clone project repository, specifying the skill name following the `org-skillname` pattern. You need to run `npm install` in the `lambda/custom` folder.

    ```bash
    $ git clone --depth=1 https://github.com/rmtuckerphx/ask-cli-jovo-starter org-skillname
    $ cd org-skillname/lambda/custom
    $ npm install
    ```

2. Change the organization and skill name in the `.ask/config` file: 
    ```bash
    11              "uri": "org-skillname-default"    
    ```

3. If using a ASK CLI profile other than `default`, rename `default` to the profile name in lines 3 and 11 of `.ask/config`

    ```bash
     1  {
     2  "deploy_settings": {
     3    "default": { 

    11              "uri": "org-skillname-default"    
    ```

4. Before issuing any ASK CLI commands, change directory back to the project root (same folder as `skill.json`)

5. Deploy the project:

    ```bash
    $ ask deploy
    ```

## Attach Google Assistant to Lambda

1. After deploying the project, go to Amazon API Gateway: 
    https://console.aws.amazon.com/apigateway/

2. Create a `New API` and enter an `API name`. It can be whatever you like. Then click `Create API`.

3. On the next screen go to the `Actions` dropdown and select `Create Method`. On the blank dropdown that appears, choose `POST`.

4. Chose the Lambda region that your function is on and then select your function. Click `OK` to give API Gateway permission to use your Lambda function.

5. Go to the `Actions` dropdown again and click Deploy API. Create a `New Stage` and type in a `Stage Name`.

6. Copy the given URL and go to https://dialogflow.com/ and sign-in with the Google Account coneccted to your Google Assistant Device.

7. Click Create Agent and name your Agent. Then `Create` and `Save` your intents, this is very similar to Alexa Intents. For help with slot filling go to https://dialogflow.com/docs/examples/slot-filling

8. After you are done making your intents, click on `Fulfillment` and Enable Webhook. Paste the URL from before and hit `Save`. Then go to each intent and click `Use webhook`. If your intent uses slots then also click on `Use webhook for slot-filling`.

9. Click on `Integrations` and enable Google Assistant. Update Draft and click Visit Console for testing or say `"Talk to my test app"` to a Google device logged in with your account.