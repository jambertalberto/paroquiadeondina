const AGENT_ID = '6127eae3-5a0a-4baf-8f12-6f8841151505'; 
const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb24iOnsiaWQiOiI3MWE0MTMyMy1kYTNlLTQwMTQtOWQ3MS0wYTRkYjQxMTI3NGUiLCJuYW1lIjoiUGFyw7NxdWlhIiwicGxhbiI6InN0YXJ0ZXIiLCJhY3RpdmUiOnRydWUsImFyY2hpdmVkIjpmYWxzZX0sImV4cGlyZXNJbiI6MjQsImNyZWF0ZWRBdCI6MTY3OTgzODQ2MjE2MiwiaWF0IjoxNjc5ODM4NDYyfQ.0wGD0C6bWwTIoAUr6QaSb6RNemLJ8YbQo1_UtBoH8_4';

const chatbotContainer = document.getElementById('chatbot-container');

const chatbot = new T2W.Chatbot(chatbotContainer, {
  agentId: AGENT_ID,
  getHeaders: () => {
    return {
      Authorization: `Bearer ${API_TOKEN}`
    };
  },
  colors: {
    main: '#0069d9',
    bubble: {
      user: '#0069d9',
      agent: '#ebebeb'
    }
  }
});

chatbot.init();
