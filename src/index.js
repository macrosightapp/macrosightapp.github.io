// Static-assets delegate Worker for the Macrosight marketing site.
// Every request is forwarded to the ASSETS binding, which serves the
// matching file from ./public (configured in wrangler.jsonc).
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
