# @n8n-dev/n8n-nodes-unicourt

![unicourt Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-unicourt.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-unicourt)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing unicourt API integrations by hand.**

Every time you connect n8n to unicourt, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to unicourt took 5 minutes, not half a day?**

This node gives you **20+ resources** out of the box: **Authentication API**, **Usage API**, **Case Search API**, **Case Docket API**, **Callback API**, and 15 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-unicourt
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-unicourt`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **unicourt API** → paste your API key
3. Drag the **unicourt** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Authentication API | Post generate new token to access api, Put api to invalidate all access tokens, Put api to invalidate the access token, Put api to list all the access tokens id |
| Usage API | Get specify the billing cycle to know the api usage, Get all the previous 12 billing cycles, Get api usage for a requested date |
| Case Search API | Get case search, Get case search results for a given casesearchid |
| Case Docket API | Gets details for a requested attorney id, Gets associated party details for a requested attorney id, Gets case information for a requested case id, Gets attorneys for a requested case id, Gets docket entries for a requested case id, Gets primary documents of docket entries, Gets secondary documents of docket entries, Gets hearings for a requested case id, Gets judges for a requested case id, Gets parties for a requested case id, Gets related cases for a requested case id, Gets details for a requested judge id, Gets details for a requested party id, Gets associated attorney details for a requested party id |
| Callback API | Get list of callback types with count for a requested date |
| Case Export API | Get case export callback list for a requested date, Get case export callback for a requested case export callback id, Gets case exported for a requested case id |
| Case Documents API | Gets documents for a requested case id, Gets details for a requested document id, Gets downloadable url for a requested document id, Put add case document order for requested document ids, Get case document order callback list for a requested date, Get case document order callback for a requested case document order callback id |
| Case Update API | Put add case update for the requested case id, Get case updates for a requested caseid, Get case update  list for a requested date |
| Case Tracking API | Put add case track for the requested case id, Delete remove case track for a specific case id, Get case track for a requested case id, Get case track list |
| PACER Credential API | Get pacer credential list, Put add pacer credential, Delete remove pacer credential for a specific pacer user id, Get pacer credential for a requested pacer user id |
| PACER API | Get find pacer case for a requested case number and court, Get pacer case locator search api for all courts, Get pacer case locator search api for all courts, Get pacer case locator search api for bankruptcy courts, Get pacer case locator search api for all courts, Get pacer case locator search api for all courts, Get pacer case locator search api for all courts, Get pacer case locator search api for all courts, Get pacer case locator search api for all courts, Get pacer case locator search api for all courts, Get pacer case locator search api for all courts, Get pacer case locator search api for all courts, Get pacer case locator search api for all courts |
| Court Availability API | Gets court coverage of all courts of specific type |
| Court Standards API | Get areaoflaw object, Get areaoflaw object for the given areaoflaw id, Get attorney representation type object, Get attorney representation type object for the given attorneyrepresentationtypeid, Get attorney type object, Get attorney type object for given attorney type id, Get case class object, Get case class object for the given case class id, Get case relationship type object, Get case relationship type object for the given caserelationshiptypeid, Get case status object, Get returns the casestatus information for the given casestatusid, Get case status group object, Get returns the casestatusgroup information for the given casestatusgroupid, Get case type object, Get casetype object for given case type id, Get casetypegroup object, Get casetype group for the given casetype group id, Get causeofaction object, Get causeofaction object for the given causeofactionid, Get causeofactionadditionadata object, Get causeofactionadditionaldata object for the given causeofactionadditionaldataid, Get causeofactiongroup object, Get causeofactiongroup object for the given causeofactiongroupid, Get charge object, Get charge object for the given chargeid, Get charge additional data object, Get charge additional data object for the given chargeadditionaldataid, Get chargedegree object, Get chargedegree object for the given chargedegreeid, Get charge group object, Get charge group object for the given chargegroupid, Get chargeseverity object, Get chargeseverity object for the given chargeseverityid, Get court objects, Get court object for given courtid, Get appeal court objects for given courtid, Get associated court location for given courtid, Get jurisdiction geo objects for given courtid, Get courthouse object, Get courthouse object for given court location id, Get associated court for given court location, Get court service status object, Get court service status object for the given courtservicestatusid, Get court system objects, Get court system object for given courtsystemid, Get court type objects, Get court type object for given courttypeid, Get judge type object, Get judge type object for the given judgetypeid, Get jurisdiction geo object, Get jurisdiction geo object for given jurisdiction geo id, Get associated court for given jurisdiction geo, Get party role object, Get party role object, Get party role group object, Get party role group object |
| Attorney Analytics API | Get norm attorney details, Get judges faced by the attorney, Get law firms the attorney has worked for, Get parties represented by the attorney, Get attorney search, Get norm attorney search results for a given normattorneysearchid |
| Law Firm Analytics API | Get norm lawfirm details, Get attorneys working for the law firm, Get judges faced by the law firm, Get parties represented by the law firm, Get law firm search, Get norm law firm search result for a given normlawfirmsearchid |
| Judge Analytics API | Get norm judge details, Get attorneys associated with the judge, Get law firms associated with the judge, Get parties associated with the judge, Get judge search, Get norm judge search results for a given normjudgesearchid |
| Party Analytics API | Get norm party details, Get attorneys that represented the party, Get judges faced by the party, Get law firms that represented the party, Get party search, Get norm party search results for a given normpartysearchid |
| Case Analytics API | Get case count analytics by area of law, Get case count analytics by case class, Get case count analytics by case filed date, Get case count analytics by case type, Get case count analytics by case type group, Get case count analytics by court, Get case count analytics by court location, Get case count analytics by court system, Get case count analytics by courttype, Get case count analytics by jurisdiction geo, Get case count analytics by attorney, Get case count analytics by judge, Get case count analytics by norm law firm, Get case count analytics by party, Get case count analytics by party role, Get case count analytics by party role group, Get case count analytics by opposing norm attorney, Get case count analytics by opposing norm law firm, Get case count analytics by opposing norm party |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from unicourt docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official unicourt OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **unicourt** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the unicourt API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
