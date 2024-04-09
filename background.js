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
      url = `https://backstage.domain.com/user/${removeAllSpaces(info.selectionText)}`;
    }
    if (info.menuItemId === 'showItemOnMetabase') {
      url = `https://metabase.domain.com/question/261-view-the-refreshlogs-table-backstage-integration?itemID=${removeAllSpaces(info.selectionText)}`;
    }
    if (info.menuItemId === 'showTransactionsOnMetabase') {
      url = `https://metabase.domain.com/question/1351-view-the-transactions-table?item=${removeAllSpaces(info.selectionText)}`;
    }
    if (info.menuItemId === 'showTransferOnBackstage') {
      url = `https://backstage.domain.com/transfers/${removeAllSpaces(info.selectionText)}`;
    }
    if (info.menuItemId === 'showPaymentOnBackstage') {
      url = `https://backstage.domain.com/payments/${removeAllSpaces(info.selectionText)}`;
    }
    if (info.menuItemId === 'showTicketOnNotion') {
      url = `https://www.notion.so/company/${removeAllSpaces(info.selectionText)}`;
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
