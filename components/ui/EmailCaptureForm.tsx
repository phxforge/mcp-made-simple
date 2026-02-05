'use client';
import { useState } from 'react';

interface EmailCaptureFormProps {
    formId?: string;
    placeholder?: string;
    buttonText?: string;
    source: string;
    inline?: boolean;
}

export function EmailCaptureForm({
    formId, // Optional for now until integrated
    placeholder = "Enter your email",
    buttonText = "Get Free Access",
    source,
    inline = true
}: EmailCaptureFormProps) {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Simulate API call for now
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Eventually: await fetch('/api/convertkit/subscribe', ...)

            console.log(`Subscribed with email: ${email} from source: ${source}`);
            setSuccess(true);
            setEmail('');
        } catch (err) {
            setError('Failed to subscribe. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
                <div className="text-4xl mb-2">✓</div>
                <h3 className="font-bold text-green-900 mb-1">Check your inbox!</h3>
                <p className="text-sm text-green-700">
                    Your download link is on its way.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={inline ? "flex gap-2 w-full max-w-md flex-col sm:flex-row" : "space-y-3 w-full"}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all shadow-sm"
            />
            <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md whitespace-nowrap"
            >
                {loading ? 'Sending...' : buttonText}
            </button>
            {error && (
                <p className="text-sm text-red-600 mt-2">{error}</p>
            )}
        </form>
    );
}
