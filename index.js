
function checkEnvVars(requiredVars) {
    // Checking if the input is an array
    if (!Array.isArray(requiredVars)) {
        throw new TypeError('Expected an array of environment variable names');
    }

    // Checking if `dotenv` is installed 
    try {
        require.resolve('dotenv');
    } catch (e) {
        console.warn('Warning: `dotenv` is not installed. Please install it if you are using environment variables.');
    }

    // Checking for missing environment variables
    requiredVars.forEach((varName) => {
        if (!process.env[varName]) {
            console.error(`Error: Missing environment variable ${varName}`);
            throw new Error(`Missing environment variable ${varName}`);
        }
    });

    console.log('All required environment variables are present.');
}

module.exports = checkEnvVars;
