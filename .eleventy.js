module.exports = async function (config) {
  const { default: studioPreset } = await import("@studio/eleventy-preset");

  await studioPreset(config, {
    passthroughCopy: ["admin", "favicon.ico", "img"],
    watchTargets: ["styles", "js"],
    markdown: {
      breaks: true,
      markdownFilterName: "markdownify",
    },
    collections: {
      postsByYear: {
        tag: "announcements",
      },
    },
  });
};
