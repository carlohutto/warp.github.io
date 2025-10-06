Netlify CMS Admin

This folder contains the files needed to enable Netlify CMS for this site.

Next steps to enable the admin UI:
1. Deploy this site to Netlify (connect the GitHub repo). The `admin/` route will be served at `https://<your-site>/admin/`.
2. In the Netlify site settings, enable "Identity" (Netlify Identity). Configure registration preferences.
3. In Identity settings, enable "Git Gateway" under Services. This lets Netlify Identity users commit to the GitHub repo.
4. Create an admin account by signing up at `https://<your-site>/.netlify/identity` or the admin login flow.
5. Visit `https://<your-site>/admin/` and log in to open the CMS UI. You should be able to create and edit posts in `_posts/`.

Notes:
- The current Netlify CMS config uses the `git-gateway` backend and the `main` branch. You can switch to other backends if needed.
- If you'd like, I can deploy this site to Netlify for you and perform the Identity + Git Gateway setup.
