function addLinkToUserBackstage () {
  chrome.contextMenus.create({
    id: 'showItemOnBackStage',
    title: 'Backstage user page: %s',
    contexts: ['all'],
  });
}

function addLinkToUserMetabase () {
  chrome.contextMenus.create({
    id: 'showItemOnMetabase',
    title: 'Metabase last refreshs: %s',
    contexts: ['all'],
  });
}

function addLinkToUserTansactionMetabase () {
  chrome.contextMenus.create({
    id: 'showTransactionsOnMetabase',
    title: 'Show transactions: %s',
    contexts: ['all'],
  });
}

function addLinkToTransferBackstage () {
  chrome.contextMenus.create({
    id: 'showTransferOnBackstage',
    title: 'Backstage transfer tracking: %s',
    contexts: ['all'],
  });
}

function addLinkToPaymentBackstage () {
  chrome.contextMenus.create({
    id: 'showPaymentOnBackstage',
    title: 'Backstage payment tracking: %s',
    contexts: ['all'],
  });
}

function addLinkToTicketNotion () {
  chrome.contextMenus.create({
    id: 'showTicketOnNotion',
    title: 'Notion issue: %s',
    contexts: ['all'],
  });
}

function removeAllSpaces (string) {
  return string.replace(/\s/g, '');
}

function openPageOnContextMenuClick () {
  chrome.contextMenus.onClicked.addListener(function (info) {
    let url;
    if (info.menuItemId === 'showItemOnBackStage') {
      url = `https://backstage.bridgeapi.tools/user/${removeAllSpaces(info.selectionText)}`;
    }
    if (info.menuItemId === 'showItemOnMetabase') {
      url = `https://metabase.bridgeapi.tools/question/261-view-the-refreshlogs-table-backstage-integration?itemID=${removeAllSpaces(info.selectionText)}`;
    }
    if (info.menuItemId === 'showTransactionsOnMetabase') {
      url = `https://metabase.bridgeapi.tools/question/1351-view-the-transactions-table?item=${removeAllSpaces(info.selectionText)}`;
    }
    if (info.menuItemId === 'showTransferOnBackstage') {
      url = `https://backstage.bridgeapi.tools/transfers/${removeAllSpaces(info.selectionText)}`;
    }
    if (info.menuItemId === 'showPaymentOnBackstage') {
      url = `https://backstage.bridgeapi.tools/payments/${removeAllSpaces(info.selectionText)}`;
    }
    if (info.menuItemId === 'showTicketOnNotion') {
      url = `https://www.notion.so/bridgeapi/${removeAllSpaces(info.selectionText)}`;
    }
    chrome.tabs.create({ url });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  addLinkToUserBackstage();
  addLinkToUserMetabase();
  addLinkToUserTansactionMetabase();
  addLinkToTransferBackstage();
  addLinkToPaymentBackstage();
  addLinkToTicketNotion();
});

openPageOnContextMenuClick();
