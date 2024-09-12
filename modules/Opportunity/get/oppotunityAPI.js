const { test } = require('@playwright/test');
const auth_token = require('../../../auth-session.json')
const opportunityData = require('../../../fixtures/opportunityData');
const bearerToken = auth_token;


test('Opportunity API', async ({ request }) => {
    await Promise.all([

        request.get(opportunityData.getAllOpertunity, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.SubleadList, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.currentStateId, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.GetAllStatus, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.prinicipalInvestigatorSelectList, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.GetOpportunity, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.GetOpportunityAttachments, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.GetArchiveAttachment, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.GetOpportunityInteractions, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.ExportOpportunitybyLead, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.OpportunityFieledData, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.OpportunityActivityLog, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.PBMCStatuses, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.OpportunityCategories, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.CatrgoryBudget, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.EnrollmentTypes, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.SiteinformationOpportunityWise, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.DropdownDataCapabilities, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(opportunityData.currentStatusId, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
    ]);
});