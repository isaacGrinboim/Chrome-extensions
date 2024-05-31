chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "highlightWords") {
    highlightWords();
  }
});

function highlightWords() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  const nodesToHighlight = [];

  while (walker.nextNode()) {
    const node = walker.currentNode;
    const wordsStartingWithA = node.nodeValue.match(/\bA\w*\b/gi);

    if (wordsStartingWithA) {
      nodesToHighlight.push({ node, words: wordsStartingWithA });
    }
  }

  nodesToHighlight.forEach(({ node, words }) => {
    words.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, "gi");
      const span = document.createElement("span");
      span.style.backgroundColor = "blue";
      span.textContent = word;

      node.replaceWith(node.splitText(node.nodeValue.search(regex)));
      node.parentNode.insertBefore(span, node.nextSibling);
      node.splitText(word.length);
      node = node.nextSibling;
    });
  });
}
