import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.CONVERTKIT_API_KEY;
const BASE_URL = 'https://api.convertkit.com/v3';

export async function POST(request: NextRequest) {
    try {
        const { email, firstName, formId, source } = await request.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { success: false, error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Since we don't have real Keys yet, we just simulate success or log to console
        // In production, this would make the actual fetch call:
        /*
        const url = `${BASE_URL}/forms/${formId}/subscribe`;
        
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: API_KEY,
            email: email,
            first_name: firstName || '',
            tags: [source], 
          }),
        });
    
        if (!response.ok) {
           // handle error
        }
        */

        // Simulation:
        console.log(`[Mock API] Subscribing ${email} to form ${formId} from source ${source}`);
        await new Promise(r => setTimeout(r, 500));

        return NextResponse.json({
            success: true,
            message: 'Check your inbox for the download link!'
        });
    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
            { success: false, error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
