import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemAction } from "../store/slice/itemSlice";
const FetchItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //if(fetchStatus.fetchDone) return;
    //setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then(({items}) => {
        console.log("data-", items);
        dispatch(itemAction.addInitialsItems(items[0]));
        //setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return <>fetching...</>;
};

export default FetchItems;
