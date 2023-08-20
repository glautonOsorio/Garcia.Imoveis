export default {
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules", "bower_components", "shared"],

  moduleNameMapper: {
    ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "identity-obj-proxy",

    "\\.(css|scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
};
