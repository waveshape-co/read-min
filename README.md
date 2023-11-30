# Read Min

A super easy article reading time calculation mini-library for Webflow etc.

## Usage

Import the code

```
<script src="https://cdn.jsdelivr.net/gh/waveshape-co/read-min@v.1.0.1/index.js"></script>
```

Init

```
document.addEventListener("DOMContentLoaded", () => {
  const readMin = new ReadMin(
    "rich-text-block", // The rich text content element
    "reading-time" // The text element displaying the reading time
  );

  readMin.init();
});
```

## Options

### Text Content

This is the rich text element (div) containing all the content that you want to calculate reading time of.

### Reading Time

This is the text element (span) that you want to display the time in.
