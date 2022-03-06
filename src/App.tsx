import React, { useEffect } from 'react';
import ShowLoading from "./sub/ShowLoading";
import ShowTasks from "./sub/ShowTasks";
import './App.css';
import {TaskProps,DataOrgProps} from "./Interfaces";

function App() {
 
  const [data, setData] = React.useState<Array<TaskProps>>([]);
  const [dataOrg, setDataOrg] = React.useState<Array<TaskProps>>([]);
  const [loaded, setLoaded] = React.useState<boolean>(false);
  const [search, setSearch] = React.useState<string>("");
  const changeSearch = (text:string)=>
  {
    setSearch(text);
    const filteredData = dataOrg.filter((item) => {
      return Object.values(item.description).join('').toString().toLowerCase().includes(text.toLowerCase())
    })
    if(filteredData.length > 0)
    {
      setData(filteredData);
    }
    else if(data.length !== dataOrg.length)
    {
      setData(dataOrg);
    }
  }
  const copyData=(dataToCopy:DataOrgProps)=>
  {
    let collect:DataOrgProps = [];
    for(let i = 0; i < dataToCopy.length; i++)
    {
      collect.push(dataToCopy[i]);
    }
    setDataOrg(collect);
  }
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson.response.data);
        copyData(myJson.response.data);
        setLoaded(true);
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="app">
      {loaded ? (
        <ShowTasks data={data} search={search} changeSearch = {changeSearch}/>
      ) : (
        <ShowLoading/>
      )}
    </div>
  );
}

export default App;
