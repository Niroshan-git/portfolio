class MarkdownParser {
    constructor() {
        this.rules = {
            heading: /^#\s(.+)$/gm,
            subheading: /^##\s(.+)$/gm,
            bold: /\*\*(.+?)\*\*/g,
            italic: /\*(.+?)\*/g,
            code: /`(.+?)`/g,
            codeBlock: /```([a-z]*)\n([\s\S]*?)\n```/g,
            link: /\[(.+?)\]\((.+?)\)/g,
            image: /!\[(.+?)\]\((.+?)\)/g,
            list: /^\*\s(.+)$/gm,
            blockquote: /^>\s(.+)$/gm,
            horizontalRule: /^---$/gm
        };
    }

    parse(markdown) {
        let html = markdown;
        
        // Replace each markdown pattern with HTML
        html = html.replace(this.rules.heading, '<h1>$1</h1>');
        html = html.replace(this.rules.subheading, '<h2>$1</h2>');
        html = html.replace(this.rules.bold, '<strong>$1</strong>');
        html = html.replace(this.rules.italic, '<em>$1</em>');
        html = html.replace(this.rules.code, '<code>$1</code>');
        html = html.replace(this.rules.codeBlock, '<pre><code class="$1">$2</code></pre>');
        html = html.replace(this.rules.link, '<a href="$2">$1</a>');
        html = html.replace(this.rules.image, '<img src="$2" alt="$1">');
        html = html.replace(this.rules.list, '<li>$1</li>');
        html = html.replace(this.rules.blockquote, '<blockquote>$1</blockquote>');
        html = html.replace(this.rules.horizontalRule, '<hr>');
        
        // Wrap lists in ul tags
        html = html.replace(/(<li>.+<\/li>)+/g, '<ul>$&</ul>');
        
        // Add line breaks for paragraphs
        html = html.split('\n\n').map(paragraph => {
            if (!paragraph.match(/^<(\/)?(h\d|ul|ol|li|blockquote|pre|hr)/)) {
                return `<p>${paragraph}</p>`;
            }
            return paragraph;
        }).join('\n');
        
        return html;
    }
}

// Load markdown content
function loadMarkdownContent() {
    const markdownContainers = document.querySelectorAll('.markdown-content');
    
    markdownContainers.forEach(container => {
        const markdownFile = container.dataset.markdownFile;
        if (!markdownFile) return;
        
        fetch(markdownFile)
            .then(response => response.text())
            .then(markdown => {
                const parser = new MarkdownParser();
                container.innerHTML = parser.parse(markdown);
                
                // Apply syntax highlighting
                if (typeof hljs !== 'undefined') {
                    document.querySelectorAll('pre code').forEach(block => {
                        hljs.highlightElement(block);
                    });
                }
            })
            .catch(error => {
                console.error('Error loading markdown file:', error);
                container.innerHTML = '<p>Error loading content. Please try again later.</p>';
            });
    });
}

document.addEventListener('DOMContentLoaded', loadMarkdownContent);