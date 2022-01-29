const xlsx = require('xlsx');
const fs = require('fs');

const wb = xlsx.readFile("TKB20211-2109.xlsx", { cellDates: true });

const ws = wb.Sheets[wb.SheetNames[0]];

const data = xlsx.utils.sheet_to_json(ws, { range: 2 });

fs.writeFileSync("./data.json", JSON.stringify(data, null, 2));