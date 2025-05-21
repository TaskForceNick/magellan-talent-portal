// netlify/functions/feed.js
exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  const incomingKey = event.headers['x-api-key'] || '';
  const expectedKey = process.env.FEED_API_KEY;
  if (!expectedKey || incomingKey !== expectedKey) {
    return { statusCode: 401, body: 'Unauthorized' };
  }
  console.log('Received feed payload:', event.body);
  // TODO: parse XML and upsert jobs into your portal’s data store
  return { statusCode: 200, body: 'Feed received successfully' };
};
