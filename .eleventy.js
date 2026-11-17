module.exports = async function (config) {
  const { default: studioPreset } = await import("@studio/eleventy-preset");

  await studioPreset(config);
};
