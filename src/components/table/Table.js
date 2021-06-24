import React, {useState, useEffect} from 'react';
import LoaderScreen from '@jetbrains/ring-ui/components/loader-screen/loader-screen';
import Table from '@jetbrains/ring-ui/components/table/table';
import Selection from '@jetbrains/ring-ui/components/table/selection';

const TableExmp = restprops => {
  const [data, setData] = useState();
  const selection = new Selection();
  const loadData = async () => {
    await fetch(
      'https://raw.githubusercontent.com/eksite/Preparing/master/data.json'
    ).
      then(res => res.json()).
      then(res => setData(res)).then(res => console.log(res));
  };

  useEffect(() => {
    loadData();
  }, []);

  return data
    ? (
      <div>
        <Table
          data={data}
          selection={selection}
          {...restprops}
        />
      </div>
    )
    : (
      <div>
        <LoaderScreen message={'wait a second'} style={{color: 'red'}}/>
      </div>
    );
};

export default TableExmp;
