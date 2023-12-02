import React from "react";

interface ListItem {
  fileName: string;
}

const List: React.FC = () => {
  const [list] = React.useState<ListItem[]>([]);

  return (
    <div>
      {list.length > 0 && (
        <div>
          {list.map((item) => (
            <span key={item.fileName}>{item.fileName}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
