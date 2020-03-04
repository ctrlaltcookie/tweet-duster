const Twitter = require('twitter');
const deleteme = require('./deleteme.json');

const fs = require('fs');

const client = new Twitter({
  consumer_key: 'yeah',
  consumer_secret: 'so',
  access_token_key: 'no',
  access_token_secret: 'yall'
});

const deleteRecurse = async (iterator) => {
  const params = {
    id: `${deleteme[iterator]}.json`
  };
  try {
    const result = await client.post('statuses/destroy', params);
    console.log(`deleted ${params.id}`);
  } catch (e) {
    console.log('something went wrong');
    console.log(e);
  }
  if (iterator <= deleteme.length) {
    const plusplus = iterator + 1;
    await deleteRecurse(plusplus);
  }
}

(async () => {
  let iterator = 0;
  await deleteRecurse(iterator);
})();
