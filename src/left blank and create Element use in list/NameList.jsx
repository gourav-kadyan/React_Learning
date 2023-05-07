import React from 'react';

function NameList() {
  const names = ['gourav kadyan', 'sam bhardwaj', 'ravi mishra'];

  const nameListItems = names.map((name) =>
    React.createElement('li', null, name)
  );

  return (
    <div>
      <h1>Name List</h1>
      <ul>{nameListItems}</ul>
    </div>
  );
}

export default NameList;
