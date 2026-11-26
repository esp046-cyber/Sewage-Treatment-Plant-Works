# STP SCADA Engineer Working Guide 2026 (PWA)
1. Unzip and upload all files (including the `.well-known` folder) to the root of the `Sewage-Treatment-Plant-Works` repository.
2. In GitHub: Settings > Pages > Deploy from branch > `main` / root.
3. Open https://esp046-cyber.github.io/Sewage-Treatment-Plant-Works/ and check: install prompt appears, airplane mode still loads the app.
4. When you change files, bump `V` in `sw.js` so users get the update toast.
Note: `.well-known/assetlinks.json` is a template; GitHub Pages only serves it from a user-site root, so it is for reference.
