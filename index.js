function handler(event) {
    try{
        var request = event.request;
        // Note: Optional chaining (?.) syntax is not supported in this version of Node.js used by CF Functions.
        var origin = request.headers.origin.value; // Note: If 'value' property is absent, this will throw an error caught by the 'catch' block.
    
        // Allowing specific Origin
        if (origin === 'http://localhost:5173') { 
            return request; // Allow
        } else {
            return {
                statusCode: 403,
                statusDescription: 'Authorization',
                body: 'Access denied',
            };
        }
    } catch (error) {
        // Catching errors when origin.value is not present (handling absence of header)
        return {
            statusCode: 403,
            statusDescription: 'Authorization',
            body: 'Access denied',
        };
    }

};
