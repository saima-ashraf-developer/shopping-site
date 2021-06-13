import React, { createRef, useState } from "react";
import Drawer from "./Drawer";
import Pdf from "react-to-pdf";
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const ref = createRef();


const PDF = () => {
    // console.log(props.loading);
  return (
    <div>
      <div ref={ref} className="post">
        <TreeView
         
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          multiSelect
        >
          <TreeItem nodeId="1" label="categories">
            <TreeItem nodeId="2" label="item1" />
            <TreeItem nodeId="2" label="item2" />
          </TreeItem>
        </TreeView>
      </div>
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as Pdf</button>}
      </Pdf>
    </div>
  );
};

export default PDF;
