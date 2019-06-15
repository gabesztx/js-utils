function createHierarchy(files) {
  return files.reduce((hier, path) => {
    let x = hier;
    path.webkitRelativePath.split('/').forEach((item) => {
      if (!x[item]) {
        x[item] = {};
      }
      x = x[item];
    });
    x.path = path;
    return hier;
  }, {});
}

function createNode(hier) {
  const dirs = Object.keys(hier);
  let tree = '';
  dirs.forEach((dir) => {
    const { path } = hier[dir];
    if (path) {
      tree += `<eui-base-v0-tree-item><eui-v0-icon name="file"></eui-v0-icon> &nbsp; ${dir}</eui-base-v0-tree-item>`;
    } else {
      tree += `<eui-base-v0-tree-item><eui-v0-icon name="folder"></eui-v0-icon> &nbsp; ${dir}${createNode(
        hier[dir]
      )}</eui-base-v0-tree-item>`;
    }
  });
  return tree;
}

export function createTree(files) {
  return createNode(createHierarchy(files));
}
