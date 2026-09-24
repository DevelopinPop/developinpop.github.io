document.addEventListener('DOMContentLoaded', function () {
    // maps short/common language identifiers (what you'd type after ``` in
    // a fenced code block) to the display name shown on the code block's tab
    var LANGUAGE_NAMES = {
        js: 'javascript', javascript: 'javascript',
        ts: 'typescript', typescript: 'typescript',
        py: 'python', python: 'python',
        rb: 'ruby', ruby: 'ruby',
        cpp: 'c++', 'c++': 'c++', cplusplus: 'c++',
        c: 'c',
        cs: 'c#', 'c#': 'c#', csharp: 'c#',
        java: 'java',
        go: 'go', golang: 'go',
        rs: 'rust', rust: 'rust',
        php: 'php',
        swift: 'swift',
        kt: 'kotlin', kotlin: 'kotlin',
        html: 'html',
        css: 'css', scss: 'scss',
        sh: 'shell', bash: 'shell', shell: 'shell', zsh: 'shell',
        json: 'json',
        yml: 'yaml', yaml: 'yaml',
        sql: 'sql',
        md: 'markdown', markdown: 'markdown'
    };

    document.querySelectorAll('.post-content [class*="language-"]').forEach(function (block) {
        var match = block.className.match(/language-([a-zA-Z0-9+#.\-]+)/);
        if (!match) return;

        var slug = match[1].toLowerCase();
        var label = LANGUAGE_NAMES[slug] || slug;

        var tab = document.createElement('div');
        tab.className = 'code-lang-tab';
        tab.textContent = label;
        block.insertBefore(tab, block.firstChild);
    });
});
