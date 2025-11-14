C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1>node api-server.js
file:///C:/Users/Kunde/Documents/HIM/IBE160/SG-Nettgrupp1/api-server.js:1
const express = require('express');
                ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\Kunde\Documents\HIM\IBE160\SG-Nettgrupp1\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
    at file:///C:/Users/Kunde/Documents/HIM/IBE160/SG-Nettgrupp1/api-server.js:1:17
    at ModuleJob.run (node:internal/modules/esm/module_job:345:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:651:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:117:5)

Node.js v22.19.0
