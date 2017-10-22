# Alexa Skill Kit CLI + Jovo Starter Template
An Alexa Skill starter project template that uses the [ASK CLI](https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html) and the [Jovo Framework for Node.js](https://github.com/jovotech/jovo-framework-nodejs).

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


