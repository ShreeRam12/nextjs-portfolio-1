// pages/api/download.js

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'Downloads', 'ShreeRam Final Resume.pdf'); 
  const fileName = 'ShreeRam Final Resume.pdf'; 

  const fileStream = fs.createReadStream(filePath);

  res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
  res.setHeader('Content-Type', 'application/pdf');

  fileStream.pipe(res);
}
