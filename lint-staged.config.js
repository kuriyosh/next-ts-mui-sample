module.exports = {
  "*.{md,json,css,yml}": ["prettier --write"],
  "*.{js,ts,tsx}": ["eslint --cache --fix", "prettier --write"],
};
