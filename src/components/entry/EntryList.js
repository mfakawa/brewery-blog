import React from "react";
import Entry from "./Entry";

export const EntryList = ({ entriesType, entriesPath }) => {
  return (
    <div className="row m-auto py-4 py-md-5 justify-content-center">
      {entriesType &&
        entriesType.map(entry => {
          return (
            <div className="col-xl-5 px-3 mx-3 mx-sm-4 mx-md-5" key={entry.id}>
              <Entry entry={entry} address={`/${entriesPath}/`} />
            </div>
          );
        })}
    </div>
  );
};
