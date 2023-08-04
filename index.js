const { Client } = require('@googlemaps/google-maps-services-js')
const apikey = process.env.GOOGLE_MAPS_APIKEY;

module.exports.handler = async (location) => {
  const address = `${location.address1}, ${location.city}, ${location.state} ${location.postalCode}`;
  const client = new Client({});
  try {
      const r = await client.geocode({
          params: {
              address: address,
              components: { country: "us" },
              key: apikey,
          },
          timeout: 1000, // milliseconds
      });
      return r.data.results[0].geometry.location;
  } catch (error) {
      return { ERROR: error.response.data.error_message };
  }
};
