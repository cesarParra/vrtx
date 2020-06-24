import Configuration from "../builder/configuration";

let apiVersion;
try {
  apiVersion = Configuration.get().compilerOptions.targetApiVersion;
} catch (e) {
  apiVersion = 48.0;
}

export const APEX_METADATA = `<?xml version="1.0" encoding="UTF-8"?>
<ApexClass xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>${apiVersion}</apiVersion>
    <status>Active</status>
</ApexClass>`;
