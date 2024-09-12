const { test } = require('@playwright/test');
const auth_token = require('../../../auth-session.json')
const leadsData = require('../../../fixtures/leadsData');
const bearerToken = auth_token;


test('Leads API', async ({ request }) => {
    await Promise.all([

        request.get(leadsData.LeadCampaigns, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(leadsData.LeadHistory, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
        request.get(leadsData.Lead, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`
            }
        }),
    ]);
});