
/* eslint-disable consistent-return */

import { str2arr, sliceEq, readUInt32BE } from '../common.js';


var SIG_8BPS  = str2arr('8BPS\x00\x01');


export default function parse_psd(data) {
  if (data.length < 6 + 16) return;

  // signature + version
  if (!sliceEq(data, 0, SIG_8BPS)) return;

  return {
    width:  readUInt32BE(data, 6 + 12),
    height: readUInt32BE(data, 6 + 8),
    type: 'psd',
    mime: 'image/vnd.adobe.photoshop',
    wUnits: 'px',
    hUnits: 'px'
  };
}
