document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const chatWidget = document.querySelector('.chat-widget');
    const chatToggle = document.querySelector('.chat-toggle');
    const chatContainer = document.querySelector('.chat-container');
    const chatClose = document.querySelector('.chat-close');
    const chatMessages = document.querySelector('.chat-messages');
    
    // Create chat input area if it doesn't exist
    let chatInputArea = document.querySelector('.chat-input');
    if (!chatInputArea) {
        chatInputArea = document.createElement('div');
        chatInputArea.className = 'chat-input';
        chatContainer.appendChild(chatInputArea);
    }
    
    // Enhanced chat toggle button
    chatToggle.innerHTML = '💬';
    chatToggle.setAttribute('aria-label', 'Open chat');
    
    // Update chat header
    const chatHeader = document.querySelector('.chat-header h3');
    if (chatHeader) {
        chatHeader.textContent = "Chat with Niroshan";
    }
    
    // Enhanced close button
    if (chatClose) {
        chatClose.textContent = "×";
        chatClose.setAttribute('aria-label', 'Close chat');
    }
    
    // Create input area structure
    chatInputArea.innerHTML = `
        <button class="emoji-button" aria-label="Open emoji picker">😀</button>
        <input type="text" placeholder="Type your message..." aria-label="Type your message">
        <button class="send-button" type="button" aria-label="Send message">
            <svg class="send-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
        </button>
    `;
    
    // Get references to elements
    const chatInput = chatInputArea.querySelector('input');
    const sendButton = chatInputArea.querySelector('.send-button');
    const emojiButton = chatInputArea.querySelector('.emoji-button');
    
    // Create emoji picker
    const emojiPicker = document.createElement('div');
    emojiPicker.className = 'emoji-picker';
    chatContainer.appendChild(emojiPicker);
    
    // Popular emojis for chat
    const popularEmojis = [
        '👍', '❤️', '😊', '👋', '🙏', '👀',
        '😂', '🤔', '😎', '🤗', '👏', '🎉',
        '😍', '💪', '💯', '🔥', '✨', '👌'
    ];
    
    // Add emojis to picker
    popularEmojis.forEach(emoji => {
        const emojiOption = document.createElement('div');
        emojiOption.className = 'emoji-option';
        emojiOption.textContent = emoji;
        emojiOption.setAttribute('aria-label', `Select ${emoji} emoji`);
        emojiOption.addEventListener('click', () => {
            if (chatInput.value.trim() === '') {
                handleUserMessage(emoji, true); // Sending true for emoji-only flag
            } else {
                chatInput.value += emoji;
            }
            emojiPicker.classList.remove('active');
            chatInput.focus();
        });
        emojiPicker.appendChild(emojiOption);
    });
    
    // Toggle emoji picker
    emojiButton.addEventListener('click', (e) => {
        e.stopPropagation();
        emojiPicker.classList.toggle('active');
    });
    
    // Close emoji picker when clicking outside
    document.addEventListener('click', (e) => {
        if (!emojiButton.contains(e.target) && !emojiPicker.contains(e.target)) {
            emojiPicker.classList.remove('active');
        }
    });
    
    // Chat toggle functionality
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('active');
        if (chatContainer.classList.contains('active')) {
            chatInput.focus();
        }
    });
    
    // Close chat
    chatClose.addEventListener('click', () => {
        chatContainer.classList.remove('active');
    });
    
    // Check if string contains only emojis
    function containsOnlyEmoji(text) {
        const emojiRegex = /^[\p{Emoji}\s]+$/u;
        return emojiRegex.test(text.trim());
    }
    
    // Get emoji meaning
    function getEmojiMeaning(emoji) {
        const emojiMeanings = {
            '👍': "Thanks! I appreciate the thumbs up.",
            '❤️': "Thank you for the love!",
            '😊': "I'm glad you're happy with the response!",
            '👋': "Hello there! How can I help you?",
            '🙏': "You're welcome! Anything else you need?",
            '👀': "Looking for something specific?",
            '😂': "I'm glad that was amusing!",
            '🤔': "Hmm, do you have a question?",
            '😎': "Cool! What would you like to know?",
            '🤗': "Thanks for the warm response! How can I help further?",
            '👏': "Thank you for the applause! What else would you like to discuss?",
            '🎉': "That's worth celebrating! What can I help with next?",
            '😍': "I'm glad you liked that! What else would you like to know?",
            '💪': "That's the spirit! What would you like to do next?",
            '💯': "Perfect! Anything else you'd like to discuss?",
            '🔥': "That's fire! What else are you interested in?",
            '✨': "Magical! What other information would you like?",
            '👌': "Perfect! What else can I help with?"
        };
        return emojiMeanings[emoji] || "I'm not sure how to interpret that emoji. How can I help you?";
    }
    
    // Add message to chat
    function addMessage(content, isUser = false, addQuickReplies = false, isEmojiOnly = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'} ${isEmojiOnly ? 'emoji-only' : ''}`;
        
        const messageContent = document.createElement('span');
        messageContent.className = 'message-content';
        messageContent.textContent = content;
        
        messageDiv.appendChild(messageContent);
        chatMessages.appendChild(messageDiv);
        
        if (addQuickReplies && !isUser) {
            addQuickReplyButtons(getQuickRepliesForMessage(content));
        }
        
        // Scroll to bottom with smooth behavior
        chatMessages.scrollTo({
            top: chatMessages.scrollHeight,
            behavior: 'smooth'
        });
    }
    
    // Get bot response
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase().trim();
        
        // Response mapping with more specific matching
        const responseMap = {
            'hello': "Hello! How can I help you today?",
            'hi': "Hello! How can I help you today?",
            'hey': "Hello! How can I help you today?",
            'name': "I'm Niroshan's virtual assistant. Nice to meet you!",
            'contact': "You can contact Niroshan at nirowickramasooriya3@gmail.com or through the contact form on this website.",
            'email': "You can contact Niroshan at nirowickramasooriya3@gmail.com",
            'reach': "You can reach Niroshan through the contact form on this website.",
            'how to contact': "You can contact Niroshan at nirowickramasooriya3@gmail.com or through the contact form on this website.",
            'service': "Niroshan specializes in Data Analysis, Data Visualization, and Business Intelligence solutions.",
            'what you do': "Niroshan specializes in Data Analysis, Data Visualization, and Business Intelligence solutions.",
            'offer': "Niroshan offers services in Data Analysis, Data Visualization, and Business Intelligence.",
            'about your services': "Niroshan provides comprehensive data solutions including analysis, visualization, and business intelligence services.",
            'experience': "Niroshan has over 10 years of experience in data analysis and visualization, working with various clients across different industries.",
            'background': "Niroshan has a strong background in data science with over 10 years of professional experience.",
            'your experience': "Niroshan has extensive experience in data analysis and visualization across multiple industries.",
            'project': "You can check out Niroshan's projects in the Projects section of this website. There are over 50 successful projects completed!",
            'portfolio': "Niroshan's portfolio includes over 50 successful data projects. Check the Projects section for details.",
            'show projects': "You can view Niroshan's projects in the Projects section of this website.",
            'certification': "Niroshan has 7+ professional certifications in data analysis, visualization tools, and business intelligence.",
            'qualified': "Niroshan holds multiple professional certifications in data analysis and visualization.",
            'show certifications': "Niroshan has 15+ certifications in data-related fields. Would you like details on any specific one?",
            'thank': "You're welcome! Feel free to ask if you have any other questions.",
            'bye': "Goodbye! Have a great day!",
            'goodbye': "Goodbye! Have a great day!"
        };

        // Check for exact matches first
        if (responseMap[message]) {
            return responseMap[message];
        }

        // Check for partial matches
        for (const [key, response] of Object.entries(responseMap)) {
            if (message.includes(key)) {
                return response;
            }
        }

        // Default response
        return "I'm not sure I understand. Could you rephrase your question? You can ask about Niroshan's services, experience, projects, or contact information.";
    }
    
    // Handle user message
    function handleUserMessage(userMessage, forceEmojiOnly = false) {
        // Check if it's only emoji or forced emoji-only (from emoji picker)
        const isEmojiOnly = forceEmojiOnly || containsOnlyEmoji(userMessage);
        
        addMessage(userMessage, true, false, isEmojiOnly);
        
        // Remove any existing quick replies
        document.querySelectorAll('.quick-replies').forEach(el => el.remove());
        
        if (chatInput) chatInput.value = '';
        
        showTypingIndicator();
        
        setTimeout(() => {
            removeTypingIndicator();
            
            const botResponse = isEmojiOnly 
                ? getEmojiMeaning(userMessage) 
                : getBotResponse(userMessage);
            
            // Determine if we should show quick replies
            const showQuickReplies = !isEmojiOnly && 
                                  !userMessage.toLowerCase().includes('bye') && 
                                  !userMessage.toLowerCase().includes('goodbye');
            
            addMessage(botResponse, false, showQuickReplies);
        }, 800 + Math.random() * 600);
    }
    
    // Add quick reply buttons
    function addQuickReplyButtons(replies) {
        if (!replies || replies.length === 0) return;
        
        const quickRepliesDiv = document.createElement('div');
        quickRepliesDiv.className = 'quick-replies';
        
        const quickReplyEmojiMap = {
            "How to contact": { emoji: "📞", text: "How to contact" },
            "Your experience": { emoji: "🏆", text: "Your experience" },
            "Show projects": { emoji: "📊", text: "Show projects" },
            "Thank you": { emoji: "🙏", text: "Thank you" },
            "About your services": { emoji: "🛠️", text: "About your services" },
            "Show certifications": { emoji: "🎓", text: "Show certifications" },
            "Contact information": { emoji: "📧", text: "Contact information" },
            "Your services": { emoji: "⚙️", text: "Your services" }
        };
        
        replies.forEach(reply => {
            const button = document.createElement('button');
            button.className = 'quick-reply-btn';
            button.setAttribute('type', 'button');
            
            const mappedReply = quickReplyEmojiMap[reply] || { emoji: "", text: reply };
            
            if (mappedReply.emoji) {
                const emojiSpan = document.createElement('span');
                emojiSpan.className = 'quick-reply-emoji';
                emojiSpan.textContent = mappedReply.emoji;
                button.appendChild(emojiSpan);
            }
            
            const textSpan = document.createElement('span');
            textSpan.className = 'quick-reply-text';
            textSpan.textContent = mappedReply.text;
            button.appendChild(textSpan);
            
            // Enhanced click handler with proper event delegation
            button.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                handleUserMessage(mappedReply.text);
                quickRepliesDiv.remove();
            });
            
            quickRepliesDiv.appendChild(button);
        });
        
        chatMessages.appendChild(quickRepliesDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Get appropriate quick replies
    function getQuickRepliesForMessage(message) {
        const msg = message.toLowerCase();
        
        if (msg.includes("hello") || msg.includes("hi there") || msg.includes("help you")) {
            return ["How to contact", "Your experience", "Show projects"];
        }
        else if (msg.includes("contact")) {
            return ["Thank you", "About your services"];
        }
        else if (msg.includes("service") || msg.includes("offer")) {
            return ["Show projects", "Your experience"];
        }
        else if (msg.includes("experience") || msg.includes("background")) {
            return ["Show certifications", "Show projects"];
        }
        else if (msg.includes("project") || msg.includes("portfolio")) {
            return ["Contact information", "Your services"];
        }
        else if (msg.includes("certification")) {
            return ["Your experience", "Contact information"];
        }
        else if (msg.includes("welcome") || msg.includes("thank")) {
            return ["How to contact", "Show projects"];
        }
        else if (msg.includes("interpret that emoji")) {
            return ["How to contact", "Your services", "Your experience"];
        }
        else {
            return ["Your services", "Contact information", "Your experience"];
        }
    }
    
    // Show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot typing-indicator';
        
        const dots = document.createElement('div');
        dots.className = 'typing-dots';
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('span');
            dots.appendChild(dot);
        }
        
        typingDiv.appendChild(dots);
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = chatMessages.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // Send message function
    function sendMessage() {
        const text = chatInput.value.trim();
        if (text) {
            handleUserMessage(text);
        }
    }
    
    // Event listeners
    if (sendButton) {
        sendButton.addEventListener('click', sendMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Add welcome message
    setTimeout(() => {
        addMessage("Hello! I'm Niroshan's assistant. How can I help you today?", false, true);
    }, 500);
});