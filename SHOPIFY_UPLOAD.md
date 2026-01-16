# Shopify Upload & Compliance Guide

This repo now includes a dedicated Shopify theme in the `shopify/` directory (Liquid templates, sections, and assets). Use that folder when uploading to Shopify to ensure compatibility.

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
3. Create your ZIP archive from the Shopify theme directory:
   ```bash
   cd shopify
   zip -r ../leki-shopify-upload.zip . -x ".git/*"
   ```

## Build & Deploy Notes

The Shopify upload should use the Liquid theme in `shopify/`. The Vite build output is not required for the theme upload.

## Update Policy Content

Replace placeholders such as dates or support emails with your official business details if needed.
