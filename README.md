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
| Authentication API | POST Generate new token to access API., PUT API to invalidate all access tokens., PUT API to invalidate the access token., PUT API to list all the access tokens Id. |
| Usage API | GET Specify the billing cycle to know the API usage., GET Get all the previous 12 billing cycles., GET Get API usage for a requested Date. |
| Case Search API | GET Case search., GET Case search results for a given caseSearchId. |
| Case Docket API | GET Gets details for a requested Attorney ID., GET Gets Associated Party details for a requested Attorney ID., GET Gets case information for a requested Case ID., GET Gets Attorneys for a requested Case ID., GET Gets Docket Entries for a requested Case ID., GET Gets Primary Documents of Docket Entries., GET Gets Secondary Documents of Docket Entries., GET Gets Hearings for a requested Case ID., GET Gets Judges for a requested Case ID., GET Gets Parties for a requested Case ID., GET Gets Related Cases for a requested Case ID., GET Gets details for a requested Judge ID., GET Gets details for a requested Party ID., GET Gets Associated Attorney details for a requested Party ID. |
| Callback API | GET Get list of callback types with count for a requested Date. |
| Case Export API | GET Get Case Export Callback list for a requested Date., GET Get Case Export Callback for a requested Case Export Callback Id., GET Gets case exported for a requested Case ID. |
| Case Documents API | GET Gets Documents for a requested Case ID., GET Gets details for a requested Document ID., GET Gets downloadable URL for a requested Document ID., PUT Add Case Document Order for requested Document Ids., GET Get Case Document Order Callback list for a requested Date., GET Get Case Document Order Callback for a requested Case Document Order Callback Id. |
| Case Update API | PUT Add Case Update for the requested Case Id., GET Get Case Updates for a requested CaseId., GET Get Case Update  list for a requested Date. |
| Case Tracking API | PUT Add Case Track for the requested Case Id., DELETE Remove Case Track for a specific Case Id., GET Get Case Track for a requested Case Id., GET Get Case Track list. |
| PACER Credential API | GET Get Pacer Credential List., PUT Add Pacer Credential., DELETE Remove Pacer credential for a specific Pacer User Id., GET Get Pacer Credential for a requested pacer User Id. |
| PACER API | GET Find PACER Case for a requested Case Number and Court., GET PACER Case Locator Search API for All Courts., GET PACER Case Locator Search API for All Courts., GET PACER Case Locator Search API for Bankruptcy Courts., GET PACER Case Locator Search API for All Courts., GET PACER Case Locator Search API for All Courts., GET PACER Case Locator Search API for All Courts., GET PACER Case Locator Search API for All Courts., GET PACER Case Locator Search API for All Courts., GET PACER Case Locator Search API for All Courts., GET PACER Case Locator Search API for All Courts., GET PACER Case Locator Search API for All Courts., GET PACER Case Locator Search API for All Courts. |
| Court Availability API | GET Gets Court Coverage of all courts of specific type. |
| Court Standards API | GET AreaOfLaw Object., GET AreaOfLaw Object for the given AreaOfLaw Id., GET Attorney Representation Type Object., GET Attorney Representation Type Object for the given attorneyRepresentationTypeId., GET Attorney Type Object., GET Attorney Type Object for given Attorney Type Id., GET Case Class Object., GET Case Class Object for the given Case Class Id., GET Case Relationship Type Object., GET Case Relationship Type Object for the given caseRelationshipTypeId., GET Case Status Object., GET Returns the caseStatus information for the given caseStatusId., GET Case Status Group Object., GET Returns the caseStatusGroup information for the given caseStatusGroupId., GET Case Type Object., GET CaseType Object for given Case Type Id., GET CaseTypeGroup Object., GET CaseType Group for the given CaseType Group Id., GET CauseOfAction Object., GET CauseOfAction Object for the given causeOfActionId., GET CauseOfActionAdditionaData Object., GET CauseOfActionAdditionalData Object for the given causeOfActionAdditionalDataId., GET CauseOfActionGroup Object., GET CauseOfActionGroup Object for the given causeOfActionGroupId., GET Charge Object., GET Charge Object for the given chargeId., GET Charge Additional Data Object., GET Charge Additional Data Object for the given chargeAdditionalDataId., GET ChargeDegree Object., GET ChargeDegree Object for the given chargeDegreeId., GET Charge Group Object., GET Charge Group Object for the given chargeGroupId., GET ChargeSeverity Object., GET ChargeSeverity Object for the given chargeSeverityId., GET Court Objects., GET Court Object for given courtId., GET Appeal Court Objects for given courtId., GET Associated Court Location for given courtId., GET Jurisdiction Geo Objects for given courtId., GET Courthouse Object., GET Courthouse Object for given Court Location Id., GET Associated Court for given Court Location., GET Court Service Status Object., GET Court Service Status Object for the given courtServiceStatusId., GET Court System Objects., GET Court System Object for given courtSystemId., GET Court Type Objects., GET Court Type Object for given courtTypeId., GET Judge Type Object., GET Judge Type Object for the given judgeTypeId., GET Jurisdiction Geo Object., GET Jurisdiction Geo Object for given Jurisdiction Geo Id., GET Associated Court for given Jurisdiction Geo., GET Party Role Object., GET Party Role Object., GET Party Role Group Object., GET Party Role Group Object. |
| Attorney Analytics API | GET Norm Attorney Details., GET Judges faced by the Attorney., GET Law Firms the attorney has worked for., GET Parties Represented By the Attorney., GET Attorney search., GET Norm attorney search results for a given normAttorneySearchId. |
| Law Firm Analytics API | GET Norm LawFirm Details., GET Attorneys working for the Law Firm., GET Judges Faced By the Law Firm., GET Parties Represented by the Law Firm., GET Law firm search., GET Norm law firm search result for a given normLawFirmSearchId. |
| Judge Analytics API | GET Norm Judge Details., GET Attorneys Associated with the Judge., GET Law Firms Associated With the Judge., GET Parties Associated with the Judge., GET Judge search., GET Norm judge search results for a given normJudgeSearchId. |
| Party Analytics API | GET Norm Party Details., GET Attorneys that represented the Party., GET Judges Faced By the Party., GET Law Firms that represented the Party., GET Party search., GET Norm party search results for a given normPartySearchId. |
| Case Analytics API | GET Case Count Analytics by Area Of Law., GET Case Count Analytics by Case Class., GET Case Count Analytics by Case Filed Date., GET Case Count Analytics by Case Type., GET Case Count Analytics by Case Type Group., GET Case Count Analytics by Court., GET Case Count Analytics by Court Location., GET Case Count Analytics by Court System., GET Case Count Analytics by CourtType., GET Case Count Analytics by Jurisdiction Geo., GET Case Count Analytics by Attorney., GET Case Count Analytics by Judge., GET Case Count Analytics by Norm Law Firm., GET Case Count Analytics by Party., GET Case Count Analytics by Party Role., GET Case Count Analytics by Party Role Group., GET Case Count Analytics by Opposing Norm Attorney., GET Case Count Analytics by Opposing Norm Law Firm., GET Case Count Analytics by Opposing Norm Party. |

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
