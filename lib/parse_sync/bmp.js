
/* eslint-disable consistent-return */

import { str2arr, sliceEq, readUInt16LE } from '../common';

var SIG_BM = str2arr('BM');


export default function parse_bmp(data) {
  if (data.length < 26) return;

  if (!sliceEq(data, 0, SIG_BM)) return;

  return {
    width:  readUInt16LE(data, 18),
    height: readUInt16LE(data, 22),
    type: 'bmp',
    mime: 'image/bmp',
    wUnits: 'px',
    hUnits: 'px'
  };
}
