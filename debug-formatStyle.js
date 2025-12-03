// Debug the formatStyle function
const { formatStyle } = require('./src/utils/code-generation-helpers.ts');

console.log('Testing formatStyle function...');

const style = { backgroundColor: 'red', color: 'white' };
const result = formatStyle(style);

console.log('Input:', style);
console.log('JSON.stringify:', JSON.stringify(style));
console.log('Template result:', `style={${JSON.stringify(style)}}`);
console.log('Function result:', result);
console.log('Length:', result.length);
console.log('Character codes:', result.split('').map(c => c.charCodeAt(0)));