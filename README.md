# Extending the Camunda Modeler

Auxiliary resources for the workshop _Extending the Camunda Modeler for Fun and Profit_, helt at [CamundaCon 2019](https://www.camundacon.com/).


## Workshop Goals

The goal of this workshop is to integrate [diagram validation](https://github.com/camunda/camunda-modeler-linter-plugin) into the Camunda Modeler and implement our own plug-in that contributes custom validation rules.

More specific, we set out the accomplish the following:

* Install [Camunda Modeler Linter plug-in](https://github.com/camunda/camunda-modeler-plugin-linter)
* Create own Camunda Modeler plug-in
* Setup for plug-in development
* Create [bpmnlint plug-in](https://github.com/bpmn-io/bpmnlint-plugin-example)
* Integrate bpmnlint plug-in with our Camunda Modeler plug-in
* Write our own validation rules: No user tasks and external tasks only


## Prerequisites

* You have an appropriate command line set up (_NO `cmd`_ but something like [`git-bash`](https://www.atlassian.com/git/tutorials/git-bash) on Windows)
* You've [downloaded the Camunda Modeler](https://camunda.com/download/modeler/)
* You have [Node.js](https://nodejs.org/en/) (LTS or higher) installed

To verify, ensure the following works:

* Opening the Camunda Modeler

* Retrieving versions of `node`, `npm` and `npx` via the command line:

    ```
    node -v
    npm -v
    npx -v
    ```


## Step 0: Install Linter Plug-in

Within the Camunda Modeler `resources/plugins` directory (cf. [plug-in search paths](https://github.com/camunda/camunda-modeler/tree/develop/docs/plugins#plugging-into-the-camunda-modeler)) execute:

```sh
npx degit github:camunda/camunda-modeler-plugin-linter camunda-modeler-plugin-linter
```

Restart the Camunda Modeler.

#### Expected Results

* The [Linter plug-in](https://github.com/camunda/camunda-modeler-linter-plugin) is downloaded from GitHub and unpacked to the `resources/plugins/camunda-modeler-linter-plugin` directory.

* After restarting the Camunda Modeler validation controls show up when opening a BPMN diagram:

    ![Linter Plug-in Installed](./images/00_linter_plugin_installed.png)


## Step 1: Play Around with the Plug-in

You got a local BPMN diagram? Open the diagram. Activate the linting mode by clicking the lint result overlay and  see how validation kicks in.

#### Expected Results

* Linter errors and warnings show up on the diagram. Or your diagram is bullet-proof already!

   ![Linter Plug-in Enabled](./images/01_linter_plugin_enabled.png)


## Step 2: Create a Plug-in that Provides own Rules

The linter plug-in has a [documented extension point](https://github.com/camunda/camunda-modeler-linter-plugin#overriding-provided-rules) to override the provided lint rules with custom ones.

We will create our own plug-in that provides our own, custom rules to the app.