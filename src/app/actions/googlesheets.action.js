
'use server'

import { google } from 'googleapis'

export async function SubmitResults() {
   

        let all = document.getElementsByTagName("*");
        let inputs = [];
        let results = {};
    
        for (let i = 0, max = all.length; i < max; i++) {
            if (all[i].nodeName === "INPUT" ||
                all[i].nodeName === "TEXTAREA" ||
                all[i].nodeName == "SELECT") {
                inputs.push(all[i]);
            }
        }
    
        for (let i = 0, max = inputs.length; i < max; i++) {
            results[inputs[i].id] = inputs[i].value;
        }
    
    
        const auth = await google.auth.getClient({ scopes: ['https://www.googleapis.com/auth/spreadsheets'] })
    
        const sheet = google.sheets({ version: 'v4', auth: auth })
    
        await sheet.spreadsheets.values.append({
            auth: auth,
            spreadsheetId: '1Yxo1VbZ_iMVMXkdEKUAQ1dG5Vz-0uE9ylE69nUJLo-0',
            range: 'Sheet1!A:V',
            valueInputOption: 'USER_ENTERED',
            resource: {
                values: results
            }
        })
    
        return 'success'
    }
    
    //return <button id="endOfForm" onClick={SendResults}>Submit</button>
