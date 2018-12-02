module.exports = {
    // Eslint规则{
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "semi": 2,
    "comma-dangle": ["off"],
    "import/no-named-as-default": 0
  },
  "plugins": ["react"],
  "extends": "airbnb"
}
