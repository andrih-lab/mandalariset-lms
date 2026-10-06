import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export function renderMarkdown(md) {
  return sanitizeHtml(marked.parse(md || '', { async: false }), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']),
    allowedAttributes: { a: ['href', 'title'], img: ['src', 'alt'] },
    allowedSchemes: ['http', 'https', 'mailto'],
  });
}

// Hanya kembalikan URL embed milik kita sendiri dari ID video yang tervalidasi.
export function youtubeEmbed(url) {
  const m = String(url).match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/);
  return m ? `https://www.youtube-nocookie.com/embed/${m[1]}` : null;
}

// PDF: path lokal /files/... atau https saja.
export function safePdfUrl(url) {
  const u = String(url);
  return /^\/files\/[\w./-]+\.pdf$/i.test(u) && !u.includes('..') || /^https:\/\/\S+$/.test(u) ? u : null;
}
