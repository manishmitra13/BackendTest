
const testJson = {
    "firstName": "Rack",
    "lastName": "Jackon",
    "gender": "man",
    "age": 24,
    "address": {
        "streetAddress": "126",
        "city": "San Jone",
        "state": "CA",
        "postalCode": "394221"
    },
    "phoneNumbers": [
        { "type": "home", "number": "7383627627" }
    ]
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

//Console - How you change values of only cpecific fields.
function generateRandomText(value: string){
  const updatedValue = value.concat(' ',uuidv4());
  return updatedValue
}
const newJson = {...testJson, address:{
    streetAddress: generateRandomText(testJson.address.streetAddress),
    postalCode: generateRandomText(testJson.address.postalCode),
    state: testJson.address.postalCode,
    city: testJson.address.city
}}

console.log(newJson);

