import React, {useEffect} from 'react';

const fetchData = async (path) => {
    const aemauthorurl = process.env.REACT_APP_AEM_AUTHOR;

	const url = `${aemauthorurl}/${path.split(":/")[1]}.model.json`;
	const data = await fetch(url, {credentials: "include"});
	const json = await data.json();
	return json;
};

const Text = (props) => {
  const {itemID, itemProp = "text", itemType, className, data: initialData, isComponent = false} = props;
  const editorProps = {
    itemID,
    itemProp,
    itemType,
    "data-editor-behavior": isComponent
  };

  const [data,setData] = React.useState(initialData || {});
  useEffect(() => {
    if(!itemID || !itemProp ) return;
    if(!initialData) { fetchData(itemID).then((data) => setData(data)) };
  }, [itemID, itemProp, initialData]);

  return (
      itemType !== "richtext" ?(
          <div {...editorProps} className={className} data-editor-itemlabel={data[itemProp]}>
            {data[itemProp]}
          </div>
      ) : <div {...editorProps} className={className} dangerouslySetInnerHTML={{__html: data[itemProp]}}/>
  );
};

export default Text;