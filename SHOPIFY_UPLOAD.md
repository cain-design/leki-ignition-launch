# Shopify Upload & Compliance Guide

This project is a Vite + React storefront that includes the required Shopify policy pages and footer links. Follow the steps below to create a lightweight upload package and ensure compliance.

## Compliance Checklist

- [x] Privacy Policy page available at `/policies/privacy`.
- [x] Terms & Conditions page available at `/policies/terms`.
- [x] Shipping Policy page available at `/policies/shipping`.
- [x] Refunds & Returns Policy page available at `/policies/refund`.
- [x] Footer links to all policy pages for easy access.
- [x] Contact page available at `/contact`.

## Prepare a Lightweight ZIP (<50MB)

1. **Remove local dependencies before zipping** (already excluded via `.gitignore`, but should be removed from the ZIP as well):
   ```bash
   rm -rf node_modules
   ```
2. Ensure no build artifacts are included:
   ```bash
   rm -rf dist dist-ssr
   ```
3. Create your ZIP archive:
   ```bash
   zip -r leki-shopify-upload.zip . -x "node_modules/*" -x "dist/*" -x "dist-ssr/*" -x ".git/*"
   ```

## Build & Deploy Notes

- Run a production build locally before deploying:
  ```bash
  npm install
  npm run build
  ```
- The production output is in the `dist/` folder.
- For Shopify, you can upload or host the built assets using your preferred Shopify integration (e.g., hosting via a Shopify app, a custom theme integration, or an external hosting endpoint embedded in Shopify pages). Consult your Shopify setup to align with your deployment path.

## Update Policy Content

Replace placeholders such as dates or support emails with your official business details if needed.
