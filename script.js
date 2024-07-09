const codeArea = document.getElementById('code-area');

// Function to simulate syntax highlighting (basic example)
function highlightCode(text) {
  return text.replace(/for/g, '<span class="keyword">for</span>')
             .replace(/if/g, '<span class="keyword">if</span>')
             .replace(/\d+/g, '<span class="number">...</span>'); // Highlight numbers
}

// Add line numbers
let lineNum = 1;
codeArea.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    codeArea.value += '\n';
    lineNum++;
  }
});

function updateLines() {
  const lines = codeArea.value.split('\n');
  let content = '';
  for (const line of lines) {
    content += `<div class="line">`
              + `<span class="line-number">${lineNum++}</span>`
              + `<span class="code">${highlightCode(line)}</span>`
              + '</div>';
  }
  codeArea.innerHTML = content;
}

updateLines();

codeArea.addEventListener('input', updateLines);
