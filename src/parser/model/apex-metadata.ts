import Configuration from "../builder/configuration";

const apiVersion = Configuration.get().compilerOptions.targetApiVersion;
export const APEX_METADATA = `<?xml version="1.0" encoding="UTF-8"?>
<ApexClass xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>${apiVersion}</apiVersion>
    <status>Active</status>
</ApexClass>`;
