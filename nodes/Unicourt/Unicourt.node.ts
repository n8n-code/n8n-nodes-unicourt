import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { authenticationApiDescription } from './resources/authentication-api';
import { usageApiDescription } from './resources/usage-api';
import { caseSearchApiDescription } from './resources/case-search-api';
import { caseDocketApiDescription } from './resources/case-docket-api';
import { callbackApiDescription } from './resources/callback-api';
import { caseExportApiDescription } from './resources/case-export-api';
import { caseDocumentsApiDescription } from './resources/case-documents-api';
import { caseUpdateApiDescription } from './resources/case-update-api';
import { caseTrackingApiDescription } from './resources/case-tracking-api';
import { pacerCredentialApiDescription } from './resources/pacer-credential-api';
import { pacerApiDescription } from './resources/pacer-api';
import { courtAvailabilityApiDescription } from './resources/court-availability-api';
import { courtStandardsApiDescription } from './resources/court-standards-api';
import { attorneyAnalyticsApiDescription } from './resources/attorney-analytics-api';
import { lawFirmAnalyticsApiDescription } from './resources/law-firm-analytics-api';
import { judgeAnalyticsApiDescription } from './resources/judge-analytics-api';
import { partyAnalyticsApiDescription } from './resources/party-analytics-api';
import { caseAnalyticsApiDescription } from './resources/case-analytics-api';

export class Unicourt implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'unicourt',
		name: 'N8nDevUnicourt',
		icon: { light: 'file:./unicourt.png', dark: 'file:./unicourt.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Download UniCourt Enterprise APIs Specification',
		defaults: { name: 'unicourt' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevUnicourtApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Authentication API",
					"value": "Authentication API",
					"description": ""
				},
				{
					"name": "Usage API",
					"value": "Usage API",
					"description": ""
				},
				{
					"name": "Case Search API",
					"value": "Case Search API",
					"description": ""
				},
				{
					"name": "Case Docket API",
					"value": "Case Docket API",
					"description": ""
				},
				{
					"name": "Callback API",
					"value": "Callback API",
					"description": ""
				},
				{
					"name": "Case Export API",
					"value": "Case Export API",
					"description": ""
				},
				{
					"name": "Case Documents API",
					"value": "Case Documents API",
					"description": ""
				},
				{
					"name": "Case Update API",
					"value": "Case Update API",
					"description": ""
				},
				{
					"name": "Case Tracking API",
					"value": "Case Tracking API",
					"description": ""
				},
				{
					"name": "PACER Credential API",
					"value": "PACER Credential API",
					"description": ""
				},
				{
					"name": "PACER API",
					"value": "PACER API",
					"description": ""
				},
				{
					"name": "Court Availability API",
					"value": "Court Availability API",
					"description": ""
				},
				{
					"name": "Court Standards API",
					"value": "Court Standards API",
					"description": ""
				},
				{
					"name": "Attorney Analytics API",
					"value": "Attorney Analytics API",
					"description": ""
				},
				{
					"name": "Law Firm Analytics API",
					"value": "Law Firm Analytics API",
					"description": ""
				},
				{
					"name": "Judge Analytics API",
					"value": "Judge Analytics API",
					"description": ""
				},
				{
					"name": "Party Analytics API",
					"value": "Party Analytics API",
					"description": ""
				},
				{
					"name": "Case Analytics API",
					"value": "Case Analytics API",
					"description": ""
				}
			],
			"default": ""
		},
		...authenticationApiDescription,
		...usageApiDescription,
		...caseSearchApiDescription,
		...caseDocketApiDescription,
		...callbackApiDescription,
		...caseExportApiDescription,
		...caseDocumentsApiDescription,
		...caseUpdateApiDescription,
		...caseTrackingApiDescription,
		...pacerCredentialApiDescription,
		...pacerApiDescription,
		...courtAvailabilityApiDescription,
		...courtStandardsApiDescription,
		...attorneyAnalyticsApiDescription,
		...lawFirmAnalyticsApiDescription,
		...judgeAnalyticsApiDescription,
		...partyAnalyticsApiDescription,
		...caseAnalyticsApiDescription
		],
	};
}
