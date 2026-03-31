/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/**/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
  ],
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
};
