<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [puppeteer](./puppeteer.md) &gt; [Protocol](./puppeteer.protocol.md) &gt; [Runtime](./puppeteer.protocol.runtime.md) &gt; [GetPropertiesRequest](./puppeteer.protocol.runtime.getpropertiesrequest.md)

## Protocol.Runtime.GetPropertiesRequest interface

<b>Signature:</b>

```typescript
export interface GetPropertiesRequest 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [accessorPropertiesOnly](./puppeteer.protocol.runtime.getpropertiesrequest.accessorpropertiesonly.md) | boolean | If true, returns accessor properties (with getter/setter) only; internal properties are not returned either. |
|  [generatePreview](./puppeteer.protocol.runtime.getpropertiesrequest.generatepreview.md) | boolean | Whether preview should be generated for the results. |
|  [objectId](./puppeteer.protocol.runtime.getpropertiesrequest.objectid.md) | [RemoteObjectId](./puppeteer.protocol.runtime.remoteobjectid.md) | Identifier of the object to return properties for. |
|  [ownProperties](./puppeteer.protocol.runtime.getpropertiesrequest.ownproperties.md) | boolean | If true, returns properties belonging only to the element itself, not to its prototype chain. |
