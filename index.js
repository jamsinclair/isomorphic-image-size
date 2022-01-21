import * as parsers from './lib/parsers_sync';

export default function get_image_size(data, ext) {
  const parser_names = Object.keys(parsers);

  if (data instanceof ArrayBuffer) {
    data = new Uint8Array(data);
  }

  if (ext) {
    ext = ext === 'jpg' ? 'jpeg' : ext; // Normalize jpeg to jpg
    const result = parsers[ext.toLowerCase()](data);
    return result || null;
  }

  for (var i = 0; i < parser_names.length; i++) {
    const result = parsers[parser_names[i]](data);

    if (result) return result;
  }

  return null;
}
