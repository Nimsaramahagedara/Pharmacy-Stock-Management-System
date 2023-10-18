//THIS FUNCTION WILL ACCEPT TWO PARAMETERS
//1.PREFIX FOR UNIQUE ID
//2. LAST DOCUMENT
// AND WILL RETURN UNIQUE ID

export async function generateUniqueId(prefix, lastDocument) {
    try {
        // const lastDocument =await fetchLastDocument()
        const lastIndex = prefix.length - 1;

        // Access the last character using the lastIndex
        const lastCharacter = prefix[lastIndex];

        if (lastDocument) {
            // You can access the last document's data here
            global.purchaseIdCounter = lastDocument[0].Id
            global.purchaseIdCounter = global.purchaseIdCounter.split(lastCharacter)[1];

        } else {
            console.log('No document found with the specified purchaseId.');
        }
    } catch (error) {
        console.error('Error:', error);
    }

    if (!global.purchaseIdCounter) {
        global.purchaseIdCounter = 1;
    } else {
        global.purchaseIdCounter++;
    }

    // Format the purchase ID as 'PURCXXX' where XXX is the counter value padded with leading zeros
    const purchaseId = `${prefix}${String(global.purchaseIdCounter).padStart(3, '0')}`;
    return purchaseId;
}