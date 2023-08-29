function handler(event) {
    try{
        var request = event.request;
        var origin = request.headers.origin.value; // Note: Optional chaining (?.) syntax is not supported in this version of Node.js used by CF Functions.
    
        
        if (origin === 'http://localhost:5173') { // your Origin
            return request; // Allow
        } else {
            return {
                statusCode: 403,
                statusDescription: 'Authorization',
                body: 'Access denied',
            };
        }
    } catch (error) {
        return {
            statusCode: 403,
            statusDescription: 'Authorization',
            body: 'Access denied',
        };
    }

};
