# Dineshkumar's portfolio

This is the static source for the portfolio preview.

## Open on your Mac

1. Double-click the ZIP to extract it.
2. Open the extracted `Dineshkumar_Portfolio_Source` folder.
3. Double-click `index.html` to open it in Safari or Chrome.

## Run a local server

If you have Python 3, open Terminal, type `cd ` with a trailing space, drag the
extracted folder into Terminal, and press Enter. Then run:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000 in your browser. Press Control+C in Terminal to stop
the server. If port 8000 is busy, use 8001 in both the command and the URL.

## Edit the portfolio

- `index.html` contains the text, links, and project sections.
- `style.css` controls the layout, colours, and responsive design.
- `motion.js` controls the scroll-driven scene change and staggered skill tags.
- `portrait.jpg` is the photo shown on the homepage.
- `desk.webp` is the generated wide desk scene shown as you scroll.

Keep the five site files together. Edit them in a text editor and refresh your
browser to see the changes.
