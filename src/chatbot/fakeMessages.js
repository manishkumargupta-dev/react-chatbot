const fakeMessages = [
  { from: "Joe", text: "hello" },
  { from: "Joe", text: "yellow", isUnread: true },
  { from: "Joe", text: "mellow", isUnread: true },
  { from: "Joe", text: "pillow", isUnread: true },
  { isUser: true, text: "user", sentAt: new Date() },
];

export default fakeMessages;
