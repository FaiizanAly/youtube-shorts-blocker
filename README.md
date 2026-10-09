# 🚫 My Youtube Shorts Blocker

A simple, lightweight browser extension that helps you **remove YouTube Shorts from your YouTube experience**. 🧹✨

It hides Shorts sections, Shorts video cards, and the Shorts tab — and if you open a Shorts link directly, it redirects you to the normal YouTube video player. ▶️

> 🔒 **Privacy First:** This extension runs locally in your browser. Your browsing data, videos, and personal information are **not uploaded to or stored on any server by this extension**. Everything happens on your own system. So you don't need to worry about your data being sent somewhere else or being "stolen" by this extension.

---

## ✨ Features

- 🚫 Hide YouTube Shorts shelves
- 🚫 Hide Shorts from the YouTube sidebar
- 🚫 Hide Shorts video cards from YouTube pages
- 🚫 Hide the Shorts tab on channel pages
- 🔄 Automatically redirect Shorts links to the normal YouTube player
- ⚡ Lightweight and fast
- 🔒 Works locally in your browser
- 🧩 No external server required

The extension uses a content script and CSS on YouTube pages. The manifest is configured for YouTube and mobile YouTube pages.

---

## 🛠️ How It Works

### 1. Hide Shorts

The extension uses CSS to hide different Shorts sections, sidebar entries, video cards, and the Shorts tab.

### 2. Redirect Shorts Links

If you open a URL like:

```text
https://www.youtube.com/shorts/VIDEO_ID
```

the extension changes it to:

```text
https://www.youtube.com/watch?v=VIDEO_ID
```

So you can watch the same video using YouTube's normal player. ▶️

It also checks YouTube's in-app navigation because YouTube works as a single-page application (SPA).

---

# 📦 Installation

You don't need Node.js, npm, or any complicated setup. 😎

### Step 1 — Download the Repository

Download this project from GitHub.

You can also clone it:

```bash
git clone https://github.com/FaiizanAly/youtube-shorts-blocker
```

### Step 2 — Open Chrome Extensions

Open Chrome and go to:

```text
chrome://extensions/
```

### Step 3 — Enable Developer Mode

Turn on:

**Developer mode** ⚙️

Usually, you'll find this switch in the top-right corner.

### Step 4 — Load the Extension

Click:

**Load unpacked**

Then select the folder containing:

```text
manifest.json
content.css
content.js
```

### Step 5 — Done! 🎉

Open YouTube and refresh the page.

YouTube Shorts should now be hidden. 🚫📱

---

## 📁 Project Structure

```text
My-Shorts-Blocker/
│
├── manifest.json    # 🧩 Extension configuration
├── content.css      # 🎨 Hides Shorts elements
├── content.js       # 🔄 Redirects Shorts URLs
└── README.md        # 📖 Project documentation
```

---

## 🔐 Privacy

**Your data stays on your system. 🔒**

This project is designed to work locally inside your browser.

There is:

- ❌ No backend server
- ❌ No database
- ❌ No file upload
- ❌ No external API required
- ❌ No account required
- ❌ No need to send your YouTube data anywhere

The extension runs directly on matching YouTube pages through Chrome's content-script system.

> 🛡️ **Your YouTube activity stays in your browser.**
>
> This project does not intentionally send your YouTube browsing data to a server. Always review the source code yourself before installing any browser extension, especially modified or third-party copies.

---

## 🌐 Supported Pages

The extension is configured for:

- ▶️ `youtube.com`
- 📱 `m.youtube.com`

---

## 🔧 Customization

Want to change what gets hidden?

Open:

```text
content.css
```

You can modify the CSS selectors to change which YouTube elements are hidden.

Want to change the Shorts redirect behavior?

Open:

```text
content.js
```

The redirect logic is handled there. 🔄

---

## ⚠️ Important

YouTube frequently changes its website structure.

If YouTube changes its HTML elements or CSS selectors, some Shorts elements may appear again. If that happens, the selectors in `content.css` may need to be updated.

---

## 🤝 Contributing

Found a bug or have an idea?

Feel free to:

1. ⭐ Star the repository
2. 🐛 Open an issue
3. 🔧 Submit a pull request
4. 💡 Share improvements

---

## 📄 License

Add your preferred license here, for example:

```text
MIT License
```

---

## ❤️ Made for a Cleaner YouTube

Less scrolling.  
Less distraction.  
More control over your YouTube experience. 🎯

**Enjoy YouTube without Shorts. 🚫📱**
