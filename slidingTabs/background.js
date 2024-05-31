chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({currentWindow: true, active: true}, (tabs) => {
      const currentTab = tabs[0];
      if (command === 'move-tab-right') {
        const newPosition = Math.max(currentTab.index - 1, 0);
        chrome.tabs.move(currentTab.id, {index: newPosition});
      } else if (command === 'move-tab-left') {
        chrome.tabs.query({currentWindow: true}, (tabs) => {
          const newPosition = Math.min(currentTab.index + 1, tabs.length - 1);
          chrome.tabs.move(currentTab.id, {index: newPosition});
        });
      }
    });
  });
  