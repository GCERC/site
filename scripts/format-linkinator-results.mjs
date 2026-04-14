import {appendFileSync} from 'node:fs';
import process from 'node:process';

function normalizeLinks(payload) {
  if (!payload) return [];
  if (Array.isArray(payload.links)) return payload.links;
  if (Array.isArray(payload.results)) return payload.results;
  if (Array.isArray(payload)) return payload;
  return [];
}

function getStatusCode(link) {
  const candidates = [
    link?.statusCode,
    link?.status,
    link?.response?.status,
    link?.response?.statusCode,
  ];

  for (const candidate of candidates) {
    if (typeof candidate === 'number') return candidate;
    if (typeof candidate === 'string' && /^\d+$/.test(candidate)) {
      return Number(candidate);
    }
  }

  return null;
}

function getUrl(link) {
  return link?.url || link?.link || link?.target || 'Unknown URL';
}

function getParent(link) {
  return (
    link?.parent ||
    link?.source ||
    link?.origin ||
    link?.referrer ||
    link?.page ||
    'Unknown source'
  );
}

function formatTableRows(links) {
  return links
    .map((link) => {
      const status = getStatusCode(link) ?? 'unknown';
      const url = getUrl(link).replace(/\|/g, '\\|');
      const parent = getParent(link).replace(/\|/g, '\\|');
      return `| ${status} | ${url} | ${parent} |`;
    })
    .join('\n');
}

function writeSummary(lines) {
  const body = `${lines.join('\n')}\n`;
  if (process.env.GITHUB_STEP_SUMMARY) {
    process.stdout.write(body);
    appendFileSync(process.env.GITHUB_STEP_SUMMARY, body);
    return;
  }
  process.stdout.write(body);
}

let payload;
try {
  payload = JSON.parse(process.env.LINKINATOR_RESULTS || '{}');
} catch (error) {
  writeSummary([
    '## Link Check',
    '',
    `Unable to parse Linkinator results: ${error.message}`,
  ]);
  process.exit(0);
}

const links = normalizeLinks(payload);
const failingLinks = links
  .filter((link) => {
    const status = getStatusCode(link);
    return status !== null && status !== 200;
  })
  .sort((a, b) => {
    const aStatus = getStatusCode(a) ?? 0;
    const bStatus = getStatusCode(b) ?? 0;
    if (aStatus !== bStatus) return aStatus - bStatus;
    return getUrl(a).localeCompare(getUrl(b));
  });

const heading = `## Link Check (${process.env.GITHUB_EVENT_NAME || 'manual'}:${process.env.GITHUB_REF_NAME || 'unknown'})`;

if (!failingLinks.length) {
  writeSummary([heading, '', 'All checked links returned HTTP 200.']);
  process.exit(0);
}

const limit = 100;
const displayedLinks = failingLinks.slice(0, limit);

const lines = [
  heading,
  '',
  `Found ${failingLinks.length} checked link(s) with a non-200 response.`,
  '',
  '| Status | URL | Found On |',
  '| --- | --- | --- |',
  formatTableRows(displayedLinks),
];

if (failingLinks.length > limit) {
  lines.push('');
  lines.push(`Showing first ${limit} results.`);
}

writeSummary(lines);
process.exit(0);
