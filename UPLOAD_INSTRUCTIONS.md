# How to publish to GitHub Pages (step-by-step)

1. Create a GitHub repository (e.g., `merbixo-animeshop`) and make it public.
2. On your computer, unzip `anime-shop-v2.zip` and open the folder.
3. Initialize git (if you want):
   ```
   git init
   git add .
   git commit -m "Initial version 2 - GitHub Pages"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
4. In GitHub, go to repository Settings → Pages (or `Settings -> Pages`).
5. Under "Source", select branch `main` and folder `/ (root)`, then Save.
6. After a minute or two, your site will be published at `https://<your-username>.github.io/<your-repo>/`.
7. To use Printify properly:
   - Create a Printify account, create your product, and copy the product/store link.
   - Replace `https://printify.com/merbixo-anime-shop` in `assets/script.js` and `index.html` with your real link.
8. Wise payouts:
   - Configure Wise in your Printify payout settings or add Wise bank details where Printify supports bank transfers.

If you want, I can create a `CNAME` file or help you set up a custom domain next.
