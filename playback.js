let playingNodes = [];

module.exports = {
  stopAllNodes: () => {
    playingNodes.forEach((node) => {
      if (!node.isUntouchable) {
        node.stop();
      }
    });
  },

  removeNode: (node) => {
    playingNodes = playingNodes.filter((pn) => { return pn !== node; });
  },

  addNode: (node) => { playingNodes.push(node); }
};
